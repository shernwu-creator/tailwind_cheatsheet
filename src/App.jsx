import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Layers, MousePointerClick, Search, Sparkles } from 'lucide-react'
import {
  categories,
  categoryById,
  classCountByCategory,
  tailwindClasses,
} from './data/tailwindClasses'
import { copyText } from './utils/clipboard'
import { searchClasses } from './utils/search'
import { CategoryIcon } from './components/CategoryIcon'
import { EmptyState } from './components/EmptyState'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileCategoryNav } from './components/MobileCategoryNav'
import { Sidebar } from './components/Sidebar'
import { StyleCard } from './components/StyleCard'
import { Toast } from './components/Toast'

const TOTAL_STYLES = tailwindClasses.length

function scrollToLibrary() {
  requestAnimationFrame(() => {
    const element = document.getElementById('library')
    if (!element) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    element.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  })
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )
  const [copiedId, setCopiedId] = useState(null)
  const [toast, setToast] = useState(null)

  const searchInputRef = useRef(null)
  const copyTimerRef = useRef(null)
  const toastTimerRef = useRef(null)
  const toastSequence = useRef(0)

  const trimmedQuery = query.trim()
  const isSearching = trimmedQuery.length > 0
  const searchResults = useMemo(
    () => (isSearching ? searchClasses(tailwindClasses, trimmedQuery, categories) : []),
    [isSearching, trimmedQuery],
  )

  const groups = useMemo(() => {
    if (isSearching) return []
    if (activeCategory === 'all') {
      return categories.map((category) => ({
        category,
        items: tailwindClasses.filter((item) => item.category === category.id),
      }))
    }
    const category = categoryById[activeCategory]
    return [
      {
        category,
        items: tailwindClasses.filter((item) => item.category === activeCategory),
      },
    ]
  }, [activeCategory, isSearching])

  const activeCategoryData = categoryById[activeCategory]
  const showHero = !isSearching && activeCategory === 'all'
  const displayCount = isSearching
    ? searchResults.length
    : activeCategory === 'all'
      ? TOTAL_STYLES
      : groups[0]?.items.length || 0

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem('tw-cheatsheet-theme', isDark ? 'dark' : 'light')
    } catch {
      // localStorage 可能因隱私模式而不可用，忽略即可
    }
    const themeMeta = document.querySelector('meta[name="theme-color"]')
    if (themeMeta) themeMeta.setAttribute('content', isDark ? '#0c1210' : '#f6f4ed')
  }, [isDark])

  useEffect(() => {
    function handleKeyboard(event) {
      const target = event.target
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchInputRef.current?.focus()
        searchInputRef.current?.select()
        return
      }

      if (
        event.key === '/' &&
        !isTyping &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey
      ) {
        event.preventDefault()
        searchInputRef.current?.focus()
        return
      }

      if (event.key === 'Escape' && document.activeElement === searchInputRef.current) {
        if (query) {
          setQuery('')
        } else {
          searchInputRef.current?.blur()
        }
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [query])

  useEffect(
    () => () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
    },
    [],
  )

  const handleQueryChange = useCallback((nextQuery) => {
    setQuery(nextQuery)
    if (nextQuery.trim()) setActiveCategory('all')
  }, [])

  const handleCategorySelect = useCallback((categoryId) => {
    setActiveCategory(categoryId)
    setQuery('')
    scrollToLibrary()
  }, [])

  const handleExampleSearch = useCallback((example) => {
    setActiveCategory('all')
    setQuery(example)
    scrollToLibrary()
  }, [])

  const handleClearSearch = useCallback(() => {
    setQuery('')
    setActiveCategory('all')
    window.setTimeout(() => searchInputRef.current?.focus(), 0)
  }, [])

  const handleCopy = useCallback(async (item) => {
    const success = await copyText(item.className)
    const toastId = toastSequence.current + 1
    toastSequence.current = toastId

    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setToast(null), 2400)

    if (!success) {
      setToast({ id: toastId, className: item.className, tone: 'error' })
      return
    }

    setCopiedId(item.id)
    if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    copyTimerRef.current = window.setTimeout(() => {
      setCopiedId((current) => (current === item.id ? null : current))
    }, 1800)
    setToast({ id: toastId, className: item.className, tone: 'success' })
  }, [])

  const headerIcon = isSearching ? (
    <Search className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
  ) : activeCategory === 'all' ? (
    <Layers className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
  ) : (
    <CategoryIcon
      name={activeCategoryData?.icon}
      className="h-[18px] w-[18px]"
      strokeWidth={1.9}
      aria-hidden="true"
    />
  )

  return (
    <div id="top" className="min-h-screen">
      <a
        href="#library"
        className="sr-only z-[100] rounded-lg bg-pine px-4 py-2 text-sm font-medium text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        跳至樣式列表
      </a>

      <Header
        query={query}
        onQueryChange={handleQueryChange}
        inputRef={searchInputRef}
        isDark={isDark}
        onToggleTheme={() => setIsDark((value) => !value)}
      />

      <div className="mx-auto max-w-[1480px] px-4 pb-8 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[264px_minmax(0,1fr)]">
          <Sidebar
            categories={categories}
            counts={classCountByCategory}
            total={TOTAL_STYLES}
            activeCategory={activeCategory}
            onSelect={handleCategorySelect}
          />

          <main className="min-w-0">
            {showHero ? (
              <Hero
                total={TOTAL_STYLES}
                categoryCount={categories.length}
                onExampleSearch={handleExampleSearch}
              />
            ) : null}

            <div className={showHero ? 'mt-6 lg:hidden' : 'lg:hidden'}>
              <MobileCategoryNav
                categories={categories}
                counts={classCountByCategory}
                total={TOTAL_STYLES}
                activeCategory={activeCategory}
                onSelect={handleCategorySelect}
              />
            </div>

            <section
              id="library"
              className="scroll-mt-24 pt-5 lg:pt-7"
              aria-labelledby="library-heading"
            >
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex min-w-0 items-start gap-3.5">
                  <span
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm ${
                      isSearching
                        ? 'border-brand/20 bg-brand-soft text-brand'
                        : activeCategory === 'all'
                          ? 'border-white/5 bg-pine text-lime'
                          : 'border-line bg-surface'
                    }`}
                    style={
                      !isSearching && activeCategory !== 'all' && activeCategoryData
                        ? {
                            color: activeCategoryData.accent,
                            backgroundColor: `${activeCategoryData.accent}14`,
                            borderColor: `${activeCategoryData.accent}30`,
                          }
                        : undefined
                    }
                    aria-hidden="true"
                  >
                    {headerIcon}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[8.5px] font-semibold uppercase tracking-[0.19em] text-muted/55">
                        {isSearching ? 'Search results' : 'Style library'}
                      </p>
                      <span className="h-2.5 w-px bg-line" aria-hidden="true" />
                      <p className="text-[8.5px] font-medium uppercase tracking-[0.13em] text-muted/40">
                        {isSearching ? 'Fuzzy match' : 'Tailwind CSS 3.4'}
                      </p>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-2.5">
                      <h1
                        id="library-heading"
                        className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-[26px]"
                      >
                        {isSearching
                          ? '搜尋結果'
                          : activeCategory === 'all'
                            ? '全部樣式'
                            : activeCategoryData?.name}
                      </h1>
                      <span className="inline-flex items-center rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[9.5px] text-muted">
                        {displayCount} styles
                      </span>
                    </div>

                    <p className="mt-1.5 max-w-xl text-[11.5px] leading-6 text-muted sm:text-xs">
                      {isSearching ? (
                        <>
                          找到 {searchResults.length} 個符合「
                          <span className="font-medium text-ink">{trimmedQuery}</span>
                          」的樣式，依關聯度排序。
                        </>
                      ) : activeCategory === 'all' ? (
                        '依照分類整理常用 utility classes，讓每次找樣式都更快一點。'
                      ) : (
                        activeCategoryData?.description
                      )}
                    </p>
                  </div>
                </div>

                <div className="hidden shrink-0 items-center gap-1.5 pb-1 text-[9.5px] text-muted/60 sm:flex">
                  <MousePointerClick className="h-3.5 w-3.5" aria-hidden="true" />
                  點擊 Class 名稱即可複製
                </div>
              </div>

              {isSearching ? (
                searchResults.length > 0 ? (
                  <div
                    key="search-results"
                    className="animate-fade-up grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3"
                  >
                    {searchResults.map((item) => (
                      <StyleCard
                        key={item.id}
                        item={item}
                        category={categoryById[item.category]}
                        copied={copiedId === item.id}
                        onCopy={handleCopy}
                        showCategory
                        query={trimmedQuery}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    query={trimmedQuery}
                    onClear={handleClearSearch}
                    onSuggestion={handleExampleSearch}
                  />
                )
              ) : activeCategory === 'all' ? (
                <div className="space-y-12">
                  {groups.map(({ category, items }, groupIndex) => (
                    <section
                      key={category.id}
                      aria-labelledby={`category-${category.id}`}
                      className={groupIndex === 0 ? 'animate-fade-up' : ''}
                    >
                      <div className="mb-4 flex items-end justify-between gap-4 border-b border-line/80 pb-3">
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span
                            className="h-2 w-2 shrink-0 rounded-full"
                            style={{ backgroundColor: category.accent }}
                            aria-hidden="true"
                          />
                          <h2
                            id={`category-${category.id}`}
                            className="text-[14px] font-semibold tracking-tight text-ink"
                          >
                            {category.name}
                          </h2>
                          <span className="hidden truncate text-[8.5px] font-medium uppercase tracking-[0.14em] text-muted/45 sm:inline">
                            {category.en}
                          </span>
                        </div>
                        <span className="shrink-0 font-mono text-[9px] text-muted/45">
                          {String(items.length).padStart(2, '0')} styles
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
                        {items.map((item) => (
                          <StyleCard
                            key={item.id}
                            item={item}
                            category={category}
                            copied={copiedId === item.id}
                            onCopy={handleCopy}
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div
                  key={activeCategory}
                  className="animate-fade-up grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {groups[0]?.items.map((item) => (
                    <StyleCard
                      key={item.id}
                      item={item}
                      category={activeCategoryData}
                      copied={copiedId === item.id}
                      onCopy={handleCopy}
                    />
                  ))}
                </div>
              )}

              {!isSearching && activeCategory !== 'all' ? (
                <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-dashed border-line bg-surface/60 px-5 py-4 text-center sm:flex-row sm:text-left">
                  <p className="text-[11px] leading-6 text-muted">
                    想一次瀏覽全部樣式？回到總覽，或直接搜尋 Class 與 CSS 關鍵字。
                  </p>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCategorySelect('all')}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-[10.5px] font-medium text-ink transition-colors hover:border-brand/35 hover:text-brand"
                    >
                      <Layers className="h-3 w-3" aria-hidden="true" />
                      全部樣式
                    </button>
                    <button
                      type="button"
                      onClick={() => searchInputRef.current?.focus()}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-pine px-3 py-1.5 text-[10.5px] font-medium text-cream transition-transform hover:-translate-y-0.5 dark:bg-cream dark:text-pine"
                    >
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      搜尋
                    </button>
                  </div>
                </div>
              ) : null}
            </section>

            <Footer total={TOTAL_STYLES} />
          </main>
        </div>
      </div>

      <Toast key={toast?.id || 'empty'} toast={toast} />
    </div>
  )
}
