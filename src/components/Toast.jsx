import { Check, X } from 'lucide-react'

export function Toast({ toast }) {
  if (!toast) return null

  const isError = toast.tone === 'error'

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-1/2 z-[80] w-[min(92vw,390px)] animate-toast-in safe-bottom"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="pointer-events-auto relative overflow-hidden rounded-2xl border border-white/10 bg-pine px-4 py-3.5 text-cream shadow-2xl shadow-black/25">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
              isError ? 'bg-[#ff8d8d]/15 text-[#ffadad]' : 'bg-lime/15 text-lime'
            }`}
          >
            {isError ? (
              <X className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            ) : (
              <Check className="h-4 w-4 animate-pop" strokeWidth={2.6} aria-hidden="true" />
            )}
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cream/40">
              {isError ? 'Copy failed' : 'Copied to clipboard'}
            </p>
            <p className="mt-0.5 truncate font-mono text-[13px] font-semibold text-cream">
              {isError ? '無法複製，請手動選取' : toast.className}
            </p>
          </div>

          <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-cream/45">
            ⌘V
          </span>
        </div>

        <span
          key={`progress-${toast.id}`}
          className={`absolute bottom-0 left-0 h-[2px] w-full origin-left animate-toast-bar ${
            isError ? 'bg-[#ff8d8d]' : 'bg-lime'
          }`}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
