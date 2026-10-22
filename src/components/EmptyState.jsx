import { Inbox, RotateCcw } from 'lucide-react'

const suggestions = ['flex', 'text-sm', '圓角', 'shadow', '#0ea5e9']

export function EmptyState({ query, onClear, onSuggestion }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-dashed border-line bg-surface px-6 py-16 text-center">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-brand-soft/70 blur-3xl dark:bg-brand/10"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-raised text-muted">
        <Inbox className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-ink">
        找不到符合的樣式
      </h3>
      <p className="relative mx-auto mt-2 max-w-md text-[13px] leading-7 text-muted">
        沒有找到與「
        <span className="font-medium text-ink">{query}</span>
        」相關的 Class、CSS 或中文說明。試試更短的關鍵字，或從下面的建議開始。
      </p>

      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-1.5">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onSuggestion(suggestion)}
            className="rounded-lg border border-line bg-raised px-2.5 py-1.5 font-mono text-[10.5px] text-muted transition-colors hover:border-brand/35 hover:text-brand"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClear}
        className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-pine px-4 py-2.5 text-xs font-semibold text-cream transition-transform hover:-translate-y-0.5 dark:bg-cream dark:text-pine"
      >
        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
        清除搜尋，回到全部樣式
      </button>
    </div>
  )
}
