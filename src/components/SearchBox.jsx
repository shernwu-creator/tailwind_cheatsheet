import { Command, Search, X } from 'lucide-react'

export function SearchBox({ query, onQueryChange, inputRef }) {
  return (
    <div className="group relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3.5 text-muted transition-colors group-focus-within:text-brand">
        <Search className="h-[17px] w-[17px]" strokeWidth={2} aria-hidden="true" />
      </div>

      <input
        ref={inputRef}
        type="text"
        role="searchbox"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="搜尋 Class 或 CSS…"
        aria-label="搜尋 Tailwind Class 或 CSS 屬性"
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
        enterKeyHint="search"
        className="h-11 w-full rounded-xl border border-line bg-surface pl-10 pr-12 text-[13px] text-ink shadow-sm outline-none transition-all placeholder:text-muted/70 hover:border-muted/30 focus:border-brand/50 focus:ring-4 focus:ring-brand/10 sm:text-sm"
      />

      <div className="absolute inset-y-0 right-2 flex items-center gap-1">
        {query ? (
          <button
            type="button"
            onClick={() => {
              onQueryChange('')
              inputRef.current?.focus()
            }}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-muted transition-colors hover:bg-raised hover:text-ink"
            aria-label="清除搜尋"
            title="清除搜尋"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <kbd
            className="hidden h-7 items-center gap-0.5 rounded-md border border-line bg-raised px-1.5 font-mono text-[10px] font-medium text-muted sm:flex"
            aria-hidden="true"
          >
            <Command className="h-3 w-3" />
            <span>K</span>
          </kbd>
        )}
      </div>
    </div>
  )
}
