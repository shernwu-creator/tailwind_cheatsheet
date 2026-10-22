import { Keyboard, Layers } from 'lucide-react'
import { CategoryIcon } from './CategoryIcon'

function Key({ children }) {
  return (
    <kbd className="flex h-5 min-w-5 items-center justify-center rounded border border-white/15 bg-white/[0.06] px-1 font-mono text-[9px] font-medium text-cream/60">
      {children}
    </kbd>
  )
}

export function Sidebar({ categories, counts, total, activeCategory, onSelect }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[88px]">
        <nav
          className="relative flex max-h-[calc(100vh-112px)] flex-col overflow-hidden rounded-[26px] bg-pine p-3 text-cream shadow-lift ring-1 ring-white/10"
          aria-label="樣式分類導覽"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#1f7a5f]/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-[#eeb92e]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between px-2 pb-2 pt-1.5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/35">
              Style index
            </span>
            <span className="font-mono text-[9px] text-cream/25">{categories.length} groups</span>
          </div>

          <div className="relative scrollbar-thin flex-1 space-y-0.5 overflow-y-auto pr-0.5">
            <button
              type="button"
              onClick={() => onSelect('all')}
              aria-current={activeCategory === 'all' ? 'page' : undefined}
              className={`group flex w-full items-center gap-2.5 rounded-xl px-2 py-2 text-left transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-cream text-pine shadow-sm'
                  : 'text-cream/65 hover:bg-white/[0.06] hover:text-cream'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-pine text-lime'
                    : 'bg-white/[0.065] text-cream/70 group-hover:text-cream'
                }`}
              >
                <Layers className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-semibold leading-tight">全部樣式</span>
                <span
                  className={`mt-0.5 block text-[8.5px] font-medium uppercase tracking-[0.14em] ${
                    activeCategory === 'all' ? 'text-pine/45' : 'text-cream/30'
                  }`}
                >
                  All styles
                </span>
              </span>
              <span
                className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                  activeCategory === 'all'
                    ? 'bg-pine/10 text-pine/60'
                    : 'bg-white/[0.055] text-cream/35 group-hover:text-cream/60'
                }`}
              >
                {total}
              </span>
            </button>

            <div className="px-2 pb-1.5 pt-3">
              <span className="text-[8.5px] font-semibold uppercase tracking-[0.2em] text-cream/20">
                Categories
              </span>
            </div>

            {categories.map((category) => {
              const active = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelect(category.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`group flex w-full items-center gap-2.5 rounded-xl px-2 py-2 text-left transition-all duration-200 ${
                    active
                      ? 'bg-cream text-pine shadow-sm'
                      : 'text-cream/65 hover:bg-white/[0.06] hover:text-cream'
                  }`}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors"
                    style={{
                      backgroundColor: active ? category.accent : 'rgba(255,255,255,0.065)',
                      color: active ? '#10251f' : category.accent,
                    }}
                  >
                    <CategoryIcon
                      name={category.icon}
                      className="h-4 w-4"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[12.5px] font-semibold leading-tight">
                      {category.name}
                    </span>
                    <span
                      className={`mt-0.5 block truncate text-[8.5px] font-medium uppercase tracking-[0.11em] ${
                        active ? 'text-pine/45' : 'text-cream/30'
                      }`}
                    >
                      {category.en}
                    </span>
                  </span>
                  <span
                    className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                      active
                        ? 'bg-pine/10 text-pine/60'
                        : 'bg-white/[0.055] text-cream/35 group-hover:text-cream/60'
                    }`}
                  >
                    {counts[category.id] || 0}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="relative mt-3 shrink-0 rounded-2xl border border-white/10 bg-white/[0.045] p-3.5">
            <div className="flex items-center gap-1.5 text-[8.5px] font-semibold uppercase tracking-[0.18em] text-cream/35">
              <Keyboard className="h-3.5 w-3.5" aria-hidden="true" />
              Quick keys
            </div>
            <div className="mt-2.5 space-y-2">
              <div className="flex items-center justify-between gap-2 text-[10.5px] text-cream/55">
                <span>聚焦搜尋</span>
                <span className="flex items-center gap-1">
                  <Key>⌘</Key>
                  <Key>K</Key>
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 text-[10.5px] text-cream/55">
                <span>清除搜尋</span>
                <Key>Esc</Key>
              </div>
            </div>
            <p className="mt-3 border-t border-white/10 pt-2.5 text-[10px] leading-[1.7] text-cream/30">
              可搜尋 Class、CSS 屬性、中文說明與色碼。
            </p>
          </div>

          <p className="relative mt-3 px-2 pb-0.5 text-[8.5px] uppercase tracking-[0.16em] text-cream/20">
            Tailwind CSS v3.4 · {total} styles
          </p>
        </nav>
      </div>
    </aside>
  )
}
