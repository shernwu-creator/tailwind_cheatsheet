import { Check, Copy } from 'lucide-react'
import { StylePreview } from './StylePreview'

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function Highlight({ text, query }) {
  const term = query.trim().split(/\s+/)[0]
  if (!term || term.length < 2) return text

  const parts = text.split(new RegExp(`(${escapeRegExp(term)})`, 'ig'))
  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <mark
        key={`${part}-${index}`}
        className="rounded-sm bg-accent/30 px-px text-ink"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

export function StyleCard({ item, category, copied, onCopy, showCategory, query = '' }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        copied
          ? 'border-brand/45 ring-1 ring-brand/15'
          : 'border-line hover:border-brand/30'
      }`}
    >
      <div className="preview-dots relative flex h-[132px] shrink-0 items-center justify-center overflow-hidden border-b border-line bg-raised p-3">
        <StylePreview preview={item.preview} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        {showCategory && category ? (
          <div className="mb-2.5 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: category.accent }}
              aria-hidden="true"
            />
            <span className="text-[9px] font-medium tracking-[0.06em] text-muted/75">
              {category.name}
            </span>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => onCopy(item)}
          className={`group/copy flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 ${
            copied
              ? 'border-brand/40 bg-brand-soft/75'
              : 'border-line bg-raised hover:border-brand/35 hover:bg-surface'
          }`}
          aria-label={`複製 ${item.className} 類別名稱`}
          title={copied ? '已複製到剪貼簿' : `點擊複製 ${item.className}`}
        >
          <code className="min-w-0 break-words font-mono text-[12.5px] font-semibold leading-[1.55] tracking-[-0.01em] text-ink">
            <Highlight text={item.className} query={query} />
          </code>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
              copied
                ? 'bg-brand text-white dark:text-pine'
                : 'bg-surface text-muted/70 group-hover/copy:text-brand'
            }`}
            aria-hidden="true"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 animate-pop" strokeWidth={2.5} />
            ) : (
              <Copy className="h-3.5 w-3.5" strokeWidth={2} />
            )}
          </span>
        </button>

        <p className="mb-4 mt-3 text-[12px] leading-[1.8] text-muted">{item.description}</p>

        <div className="mt-auto border-t border-line/80 pt-3">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-muted/50">
              Native CSS
            </span>
            <span className="h-px flex-1 bg-line/60" aria-hidden="true" />
          </div>
          <pre className="max-h-[74px] overflow-y-auto whitespace-pre-wrap break-words font-mono text-[10.5px] leading-[1.65] text-ink/65 scrollbar-thin dark:text-ink/60">
            {item.css}
          </pre>
        </div>
      </div>
    </article>
  )
}
