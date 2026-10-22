import { MousePointerClick, Sparkles } from 'lucide-react'

const examples = [
  { label: 'flex', query: 'flex' },
  { label: 'text-2xl', query: 'text-2xl' },
  { label: 'rounded-2xl', query: 'rounded-2xl' },
  { label: '#10b981', query: '#10b981' },
]

export function Hero({ total, categoryCount, onExampleSearch }) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-line bg-surface shadow-card">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-brand-soft/80 blur-3xl dark:bg-brand/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative grid gap-8 px-5 py-7 sm:px-8 sm:py-9 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-center xl:gap-6">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-muted shadow-sm backdrop-blur">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Personal reference · v3.4
          </div>

          <h1 className="mt-4 max-w-[620px] text-[27px] font-semibold leading-[1.16] tracking-[-0.035em] text-ink min-[360px]:text-[32px] min-[380px]:text-[34px] sm:text-[42px]">
            把 Tailwind 樣式，
            <br />
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">放在手邊。</span>
              <span
                className="absolute -bottom-0.5 left-0 -z-0 h-3 w-full -rotate-1 rounded-sm bg-accent/60 dark:bg-accent/35"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-4 max-w-[560px] text-[13px] leading-[1.85] text-muted sm:text-sm">
            從字級、間距、顏色到陰影，把最常用的樣式收進同一個抽屜。
            即時搜尋、視覺預覽、點擊複製，少一次切換分頁，多一點專注。
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[10px] font-medium text-muted/80">試試搜尋</span>
            {examples.map((example) => (
              <button
                key={example.label}
                type="button"
                onClick={() => onExampleSearch(example.query)}
                className="rounded-lg border border-line bg-raised px-2.5 py-1 font-mono text-[10.5px] font-medium text-muted transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
              >
                {example.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] text-muted/80">
            <span>
              <strong className="font-semibold text-ink">{total}</strong> 個實用樣式
            </span>
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-ink">{categoryCount}</strong> 個分類
            </span>
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
            <span>即時模糊搜尋</span>
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
            <span>一鍵複製</span>
          </div>
        </div>

        <div className="relative hidden h-[258px] xl:block" aria-hidden="true">
          <div className="absolute left-4 top-1/2 h-44 w-[240px] -translate-y-1/2 rounded-[36px] bg-brand-soft/70 blur-2xl dark:bg-brand/10" />

          <div className="absolute left-0 top-1 w-[238px] -rotate-3 rounded-2xl border border-line bg-surface p-4 shadow-lift transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/65">
              <span>Class preview</span>
              <Sparkles className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="mt-3.5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-semibold text-white dark:text-pine">
                Aa
              </div>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold text-ink">Ready to ship.</p>
                <p className="mt-0.5 truncate font-mono text-[9px] text-muted">
                  flex items-center gap-3
                </p>
              </div>
            </div>
            <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-raised">
              <div className="h-full w-2/3 rounded-full bg-brand" />
            </div>
          </div>

          <div className="absolute bottom-1 right-0 w-[224px] rotate-[3deg] rounded-2xl border border-line bg-surface p-4 shadow-lift transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted/65">
                Design tokens
              </span>
              <span className="font-mono text-[8px] text-muted/50">03</span>
            </div>
            <div className="mt-3 flex gap-1.5">
              <span className="h-9 flex-1 rounded-lg bg-pine" />
              <span className="h-9 flex-1 rounded-lg bg-brand" />
              <span className="h-9 flex-1 rounded-lg bg-accent" />
              <span className="h-9 flex-1 rounded-lg bg-[#e85d8d]" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[9px] text-muted">rounded-2xl</span>
              <span className="rounded-md border border-line bg-raised px-1.5 py-0.5 font-mono text-[8px] text-muted/75">
                shadow-lg
              </span>
            </div>
          </div>

          <div className="absolute bottom-5 left-1 z-10 flex animate-float items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[9px] font-medium text-muted shadow-card">
            <MousePointerClick className="h-3 w-3 text-brand" />
            點擊即複製
          </div>
        </div>
      </div>
    </section>
  )
}
