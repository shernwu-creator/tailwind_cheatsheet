import {
  ArrowDown,
  ArrowRight,
  Lock,
  MousePointer2,
  MoveHorizontal,
  ShieldCheck,
} from 'lucide-react'

const layoutTones = ['bg-brand/80', 'bg-accent/85', 'bg-[#7c6cf0]/85', 'bg-[#3b9edb]/80']

function Frame({ children, label }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5">
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">{children}</div>
      {label ? (
        <span className="max-w-full truncate font-mono text-[8px] tracking-[0.06em] text-muted/60">
          {label}
        </span>
      ) : null}
    </div>
  )
}

function TonedBlock({ index = 0, className = '', style }) {
  return (
    <span
      className={`rounded-[5px] ${layoutTones[index % layoutTones.length]} ${className}`}
      style={style}
    />
  )
}

function LayoutVisual({ variant }) {
  const frame =
    'flex h-[66px] w-full max-w-[230px] items-stretch gap-1.5 rounded-lg border border-dashed border-line bg-surface/45 p-2'

  switch (variant) {
    case 'col':
      return (
        <div className={`${frame} flex-col`}>
          <TonedBlock index={0} className="min-h-0 flex-1" />
          <TonedBlock index={1} className="min-h-0 flex-1" />
          <TonedBlock index={2} className="min-h-0 flex-1" />
        </div>
      )
    case 'center':
      return (
        <div className={`${frame} items-center`}>
          <TonedBlock index={0} className="h-6 w-7" />
          <TonedBlock index={1} className="h-10 w-7" />
          <TonedBlock index={2} className="h-8 w-7" />
          <TonedBlock index={3} className="h-5 w-7" />
        </div>
      )
    case 'justifyCenter':
      return (
        <div className={`${frame} items-center justify-center gap-2`}>
          <TonedBlock index={0} className="h-9 w-7" />
          <TonedBlock index={1} className="h-9 w-7" />
          <TonedBlock index={2} className="h-9 w-7" />
        </div>
      )
    case 'between':
      return (
        <div className={`${frame} items-center justify-between`}>
          <TonedBlock index={0} className="h-9 w-7" />
          <TonedBlock index={1} className="h-9 w-7" />
          <TonedBlock index={2} className="h-9 w-7" />
        </div>
      )
    case 'wrap':
      return (
        <div className={`${frame} flex-wrap content-start gap-1.5`}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TonedBlock key={index} index={index} className="h-[18px] w-[29%]" />
          ))}
        </div>
      )
    case 'grow':
      return (
        <div className={`${frame} items-center gap-1.5`}>
          <TonedBlock index={0} className="h-8 w-5" />
          <TonedBlock index={1} className="h-8 flex-1" />
          <TonedBlock index={2} className="h-8 w-5" />
        </div>
      )
    case 'grid':
    case 'cols2':
      return (
        <div className={`${frame} grid grid-cols-2 gap-1.5`}>
          {[0, 1, 2, 3].map((index) => (
            <TonedBlock key={index} index={index} className="min-h-0" />
          ))}
        </div>
      )
    case 'cols3':
      return (
        <div className={`${frame} grid grid-cols-3 gap-1.5`}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TonedBlock key={index} index={index} className="min-h-0" />
          ))}
        </div>
      )
    case 'span2':
      return (
        <div className={`${frame} grid grid-cols-3 gap-1.5`}>
          <TonedBlock index={0} className="min-h-0" style={{ gridColumn: 'span 2 / span 2' }} />
          <TonedBlock index={1} className="min-h-0" />
          <TonedBlock index={2} className="min-h-0" />
          <TonedBlock index={3} className="min-h-0" />
          <TonedBlock index={4} className="min-h-0" />
        </div>
      )
    case 'placeItems':
      return (
        <div className={`${frame} grid place-items-center`}>
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
            <span className="absolute inset-x-0 h-px bg-brand/20" />
            <span className="absolute inset-y-0 w-px bg-brand/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          </span>
        </div>
      )
    default:
      return (
        <div className={`${frame} items-center`}>
          <TonedBlock index={0} className="h-9 flex-1" />
          <TonedBlock index={1} className="h-9 flex-1" />
          <TonedBlock index={2} className="h-9 flex-1" />
        </div>
      )
  }
}

function SpacingVisual({ preview }) {
  const { variant, style = {}, value } = preview
  const dashedFrame =
    'flex w-full max-w-[220px] items-center justify-center rounded-lg border border-dashed border-line bg-surface/45'

  if (variant === 'gap') {
    return (
      <div className={`${dashedFrame} justify-center p-3`} style={{ gap: value }}>
        <TonedBlock index={0} className="h-9 w-6" />
        <TonedBlock index={1} className="h-9 w-6" />
        <TonedBlock index={2} className="h-9 w-6" />
      </div>
    )
  }

  if (variant === 'stack') {
    return (
      <div className="flex w-[132px] flex-col" style={{ gap: value }}>
        <TonedBlock index={0} className="h-4 w-full" />
        <TonedBlock index={1} className="h-4 w-full" />
        <TonedBlock index={2} className="h-4 w-full" />
      </div>
    )
  }

  if (variant === 'center') {
    return (
      <div className={`${dashedFrame} h-[70px] p-2`}>
        <div className="flex h-11 w-24 items-center justify-center rounded-md bg-brand text-[9px] font-semibold text-white dark:text-pine">
          center
        </div>
      </div>
    )
  }

  if (variant === 'overlap') {
    return (
      <div className="flex h-[72px] w-full max-w-[210px] flex-col items-center justify-center">
        <div className="h-9 w-32 rounded-lg border border-line bg-raised shadow-sm" />
        <div
          className="relative z-10 rounded-md bg-brand px-3 py-1.5 font-mono text-[9px] font-semibold text-white shadow-sm dark:text-pine"
          style={{ marginTop: style.marginTop }}
        >
          -mt-2
        </div>
      </div>
    )
  }

  if (variant === 'margin') {
    return (
      <div className={`${dashedFrame} h-[84px]`}>
        <div className="rounded-md bg-brand/10 ring-1 ring-inset ring-brand/25" style={style}>
          <div className="rounded bg-brand px-3 py-1.5 text-[9px] font-semibold text-white dark:text-pine">
            內容
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${dashedFrame} p-1`}>
      <div className="rounded-md bg-brand/10 ring-1 ring-inset ring-brand/25" style={style}>
        <div className="rounded bg-brand px-3 py-1.5 text-[9px] font-semibold text-white dark:text-pine">
          內容
        </div>
      </div>
    </div>
  )
}

function DimensionVisual({ preview }) {
  const { variant } = preview

  if (variant === 'height') {
    return (
      <div className="flex h-[72px] w-full items-end justify-center">
        <div
          className="w-14 rounded-t-lg bg-gradient-to-t from-brand to-[#5fd3ab] shadow-sm"
          style={{ height: preview.height, maxHeight: '100%' }}
        />
        <div className="ml-3 flex h-full flex-col justify-between py-0.5 font-mono text-[8px] text-muted/45">
          <span>top</span>
          <span>bottom</span>
        </div>
      </div>
    )
  }

  if (variant === 'square') {
    return (
      <div
        className="rounded-xl bg-gradient-to-br from-brand to-[#5fd3ab] shadow-sm ring-1 ring-inset ring-white/20"
        style={{ width: preview.size, height: preview.size }}
      />
    )
  }

  if (variant === 'aspect') {
    return (
      <div
        className="flex w-[124px] items-center justify-center rounded-lg bg-gradient-to-br from-[#7c6cf0] to-[#3b9edb] shadow-sm"
        style={{ aspectRatio: preview.ratio }}
      >
        <span className="font-mono text-[9px] font-medium text-white/85">16 : 9</span>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-[230px] flex-col gap-1.5">
      <div className="h-10 w-full rounded-lg border border-line bg-surface p-1">
        <div
          className="h-full rounded-md bg-gradient-to-r from-brand to-[#5fd3ab]"
          style={{ width: preview.width }}
        />
      </div>
      <div className="flex items-center justify-between font-mono text-[7.5px] text-muted/40">
        <span>0</span>
        <span className="h-2 w-px bg-line" />
        <span>{preview.label?.replace('max-width: ', '').replace('width: ', '')}</span>
      </div>
    </div>
  )
}

function RadiusVisual({ value }) {
  return (
    <div
      className="h-[66px] w-[94px] border border-line bg-gradient-to-br from-brand-soft via-surface to-accent/20 shadow-sm"
      style={{ borderRadius: value }}
    />
  )
}

function BorderVisual({ preview }) {
  return (
    <div
      className="flex h-[64px] w-[106px] items-center justify-center rounded-lg bg-white/60 font-mono text-[9px] text-slate-500 dark:bg-white/[0.04] dark:text-slate-400"
      style={{
        borderWidth: preview.width,
        borderStyle: preview.style,
        borderColor: preview.color,
      }}
    >
      border
    </div>
  )
}

function ShadowVisual({ value }) {
  return (
    <div className="flex h-[76px] w-full max-w-[210px] items-center justify-center rounded-xl bg-[#f1f5f9]">
      <div
        className="h-12 w-24 rounded-xl bg-white"
        style={{
          boxShadow: value === 'none' ? 'none' : value,
          border: value === 'none' ? '1px dashed #cbd5e1' : '1px solid rgb(226 232 240 / .7)',
        }}
      />
    </div>
  )
}

function RingVisual() {
  return (
    <div className="flex h-[76px] w-full max-w-[210px] items-center justify-center rounded-xl bg-[#f8fafc]">
      <div className="h-12 w-24 rounded-xl border border-[#e2e8f0] bg-white shadow-[0_0_0_3px_#38bdf8]" />
    </div>
  )
}

function OpacityVisual({ value }) {
  return (
    <div className="relative h-[68px] w-[128px]" aria-hidden="true">
      <span className="absolute left-1 top-1 h-16 w-16 rounded-full bg-[#e85d8d]" />
      <span
        className="absolute right-1 top-1 h-16 w-16 rounded-full bg-brand ring-2 ring-surface"
        style={{ opacity: value }}
      />
    </div>
  )
}

function ColorSwatch({ preview }) {
  return (
    <div
      className="relative flex h-[76px] w-full flex-col justify-between overflow-hidden rounded-xl p-3 ring-1 ring-inset ring-black/5 dark:ring-white/10"
      style={{ backgroundColor: preview.value, color: preview.foreground || '#ffffff' }}
    >
      <div className="flex items-center justify-between text-[7.5px] font-semibold uppercase tracking-[0.16em] opacity-65">
        <span>Background</span>
        <span className="h-2 w-2 rounded-full border border-current opacity-50" />
      </div>
      <span className="font-mono text-[11px] font-medium">{preview.value}</span>
    </div>
  )
}

function TextColorVisual({ preview }) {
  return (
    <div className="w-full max-w-[228px] rounded-xl border border-[#e2e8f0] bg-white p-3.5 shadow-sm">
      <div className="flex items-center justify-between text-[7.5px] font-semibold uppercase tracking-[0.16em] text-[#94a3b8]">
        <span>Text color</span>
        <span className="text-[11px] font-bold" style={{ color: preview.value }}>
          Aa
        </span>
      </div>
      <p className="mt-1.5 text-[15px] font-semibold leading-tight" style={{ color: preview.value }}>
        讓色彩說話
      </p>
      <p className="mt-1 text-[9px]" style={{ color: preview.value }}>
        The quick brown fox jumps.
      </p>
    </div>
  )
}

function BorderColorVisual({ preview }) {
  return (
    <div
      className="flex h-[64px] w-[108px] items-center justify-center rounded-xl border-2 bg-white font-mono text-[9px] text-[#64748b] shadow-sm"
      style={{ borderColor: preview.value }}
    >
      border
    </div>
  )
}

function ResponsiveMock({ state }) {
  switch (state) {
    case 'hidden':
      return (
        <div className="flex h-[42px] items-center justify-center rounded-md border border-dashed border-line bg-surface/70">
          <span className="font-mono text-[6.5px] text-muted/45">display: none</span>
        </div>
      )
    case 'block':
      return (
        <div className="h-[42px] rounded-md bg-gradient-to-br from-brand via-brand/80 to-[#5fd3ab]" />
      )
    case 'grid2':
      return (
        <div className="grid h-[42px] grid-cols-2 gap-1">
          {[0, 1, 2, 3].map((index) => (
            <TonedBlock key={index} index={index} className="min-h-0" />
          ))}
        </div>
      )
    case 'grid3':
      return (
        <div className="grid h-[42px] grid-cols-3 gap-1">
          {[0, 1, 2].map((index) => (
            <TonedBlock key={index} index={index} className="min-h-0" />
          ))}
        </div>
      )
    case 'row':
      return (
        <div className="flex h-[42px] gap-1">
          {[0, 1, 2].map((index) => (
            <TonedBlock key={index} index={index} className="min-h-0 flex-1" />
          ))}
        </div>
      )
    case 'textSm':
      return (
        <div className="flex h-[42px] items-center justify-center">
          <span className="text-[11px] font-semibold text-ink">Aa 字</span>
        </div>
      )
    case 'textLg':
      return (
        <div className="flex h-[42px] items-center justify-center">
          <span className="text-[18px] font-semibold text-ink">Aa 字</span>
        </div>
      )
    case 'tight':
      return (
        <div className="flex h-[42px] items-center justify-center rounded-md bg-brand/10 p-0.5">
          <div className="flex h-full w-full items-center justify-center rounded bg-brand/70">
            <span className="text-[6.5px] font-medium text-white dark:text-pine">內容</span>
          </div>
        </div>
      )
    case 'padded':
      return (
        <div className="flex h-[42px] items-center justify-center rounded-md bg-brand/10 p-2.5">
          <div className="flex h-full w-full items-center justify-center rounded bg-brand/70">
            <span className="text-[6.5px] font-medium text-white dark:text-pine">內容</span>
          </div>
        </div>
      )
    case 'full':
      return (
        <div className="flex h-[42px] items-center">
          <div className="h-7 w-full rounded-md bg-brand/70" />
        </div>
      )
    case 'contained':
      return (
        <div className="flex h-[42px] items-center">
          <div className="mx-auto h-7 w-[72%] rounded-md bg-brand/70" />
        </div>
      )
    case 'wrap':
      return (
        <div className="flex h-[42px] flex-wrap content-start gap-1">
          {[0, 1, 2, 3].map((index) => (
            <span key={index} className="h-[17px] w-[30%] rounded-[3px] bg-brand/70" />
          ))}
        </div>
      )
    default:
      return (
        <div className="flex h-[42px] flex-col gap-1">
          <span className="min-h-0 flex-1 rounded-[3px] bg-brand/80" />
          <span className="min-h-0 flex-1 rounded-[3px] bg-brand/45" />
        </div>
      )
  }
}

function ResponsiveVisual({ preview }) {
  const isMax = preview.breakpoint.startsWith('max-')
  const breakpointLabel = preview.breakpoint.toUpperCase()

  return (
    <div className="flex w-full items-stretch gap-1.5">
      <div className="min-w-0 flex-1 rounded-lg border border-line bg-surface/55 p-1.5">
        <div className="mb-1 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.1em] text-muted/40">
          <span>Base</span>
          <span>auto</span>
        </div>
        <ResponsiveMock state={preview.from} />
      </div>

      <div className="flex w-3 shrink-0 items-center justify-center text-muted/30">
        <ArrowRight className="h-3 w-3" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1 rounded-lg border border-brand/25 bg-brand-soft/20 p-1.5">
        <div className="mb-1 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.1em] text-brand/60">
          <span>{breakpointLabel}</span>
          <span>{isMax ? '≤' : '≥'}</span>
        </div>
        <ResponsiveMock state={preview.to} />
      </div>
    </div>
  )
}

function ScrollStrip({ variant }) {
  const activeIndex = variant === 'start' || variant === 'always' ? 0 : 1
  const snapLine =
    variant === 'start' || variant === 'always' ? 'left-[18px]' : 'left-1/2'

  return (
    <div className="relative w-full max-w-[230px] overflow-hidden rounded-lg border border-line bg-surface/45">
      <div className="flex items-center justify-between px-2 pt-2 font-mono text-[6px] uppercase tracking-[0.12em] text-muted/40">
        <span>snap container</span>
        {variant === 'always' ? (
          <Lock className="h-2.5 w-2.5" aria-hidden="true" />
        ) : (
          <MoveHorizontal className="h-2.5 w-2.5" aria-hidden="true" />
        )}
      </div>
      <div className="flex gap-1.5 p-2">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`h-10 w-[68px] shrink-0 rounded-md ${
              index === activeIndex ? 'bg-brand' : 'bg-line/60'
            }`}
          />
        ))}
      </div>
      <span
        className={`pointer-events-none absolute bottom-2 top-6 w-px border-l border-dashed border-brand/60 ${snapLine}`}
        aria-hidden="true"
      />
    </div>
  )
}

function ScrollVisual({ preview }) {
  const { variant } = preview

  if (variant === 'smooth' || variant === 'auto') {
    return (
      <div className="w-full max-w-[220px] rounded-lg border border-line bg-surface/45 p-2.5">
        <div className="flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.12em] text-muted/40">
          <span>scroll container</span>
          <span className="flex items-center gap-1 normal-case tracking-normal">
            <MousePointer2 className="h-2.5 w-2.5" aria-hidden="true" />
            {variant}
          </span>
        </div>
        <div className="relative mt-3 h-1.5 rounded-full bg-line/60">
          <span
            className="absolute left-0 top-0 h-full rounded-full bg-brand/25"
            style={{ width: variant === 'smooth' ? '60%' : '22%' }}
          />
          <span
            className="absolute -top-1 h-3.5 w-3.5 rounded-full bg-brand shadow-sm"
            style={{ left: variant === 'smooth' ? '55%' : '18%' }}
          />
        </div>
        <div className="mt-2.5 flex items-center justify-between font-mono text-[6px] text-muted/35">
          <span>start</span>
          <span>{variant === 'smooth' ? 'animated' : 'instant'}</span>
          <span>target</span>
        </div>
      </div>
    )
  }

  if (variant === 'contain' || variant === 'none') {
    return (
      <div className="relative flex h-[68px] w-full max-w-[218px] items-center justify-center rounded-lg border border-dashed border-line bg-surface/45 p-2">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-line bg-surface">
          <span className="text-[8px] font-medium text-ink/70">內層可捲動區</span>
          <span className="mt-1 h-1 w-16 rounded bg-line" />
          <span className="mt-1.5 flex items-center gap-1 rounded-full border border-brand/20 bg-brand-soft px-2 py-0.5 text-[6.5px] font-medium text-brand">
            <ShieldCheck className="h-2.5 w-2.5" aria-hidden="true" />
            {variant === 'contain' ? 'chain contained' : 'chain disabled'}
          </span>
        </div>
        <ArrowDown
          className="absolute bottom-1 right-1 h-3 w-3 text-muted/25"
          aria-hidden="true"
        />
      </div>
    )
  }

  if (variant === 'margin' || variant === 'padding') {
    return (
      <div className="relative h-[68px] w-full max-w-[220px] overflow-hidden rounded-lg border border-line bg-surface/45">
        <span className="absolute inset-x-0 top-0 h-3 bg-line/25" />
        <span className="absolute left-2 top-1 font-mono text-[6px] text-muted/45">
          viewport
        </span>
        <span
          className="absolute inset-x-0 border-t border-dashed border-brand/60"
          style={{ top: variant === 'margin' ? '28px' : '20px' }}
        />
        <div
          className="absolute inset-x-4 rounded-md bg-brand/15 px-2 py-1.5 text-center text-[8px] font-medium text-brand"
          style={{ top: variant === 'margin' ? '34px' : '24px' }}
        >
          anchor target
        </div>
      </div>
    )
  }

  return <ScrollStrip variant={variant} />
}

function AnimationVisual({ variant }) {
  switch (variant) {
    case 'spin':
      return (
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface/60">
          <span className="h-10 w-10 animate-spin rounded-full border-[3px] border-brand/15 border-t-brand" />
        </div>
      )
    case 'ping':
      return (
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-brand/30" />
          <span className="relative h-7 w-7 rounded-full bg-brand shadow-sm" />
        </div>
      )
    case 'pulse':
      return (
        <div className="w-[138px] animate-pulse space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-line/80" />
            <span className="h-2 w-16 rounded bg-line/80" />
          </div>
          <span className="block h-2 w-full rounded bg-line/60" />
          <span className="block h-2 w-4/5 rounded bg-line/40" />
        </div>
      )
    case 'bounce':
      return (
        <div className="flex h-[66px] w-20 flex-col items-center justify-between">
          <span className="h-8 w-8 animate-bounce rounded-full bg-gradient-to-br from-brand to-[#5fd3ab] shadow-sm" />
          <span className="h-px w-10 bg-line" />
        </div>
      )
    case 'none':
      return (
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-line bg-surface">
          <span className="h-2.5 w-2.5 rounded-full bg-muted/25" />
          <span className="absolute h-px w-12 rotate-45 bg-[#e85d8d]/65" />
        </div>
      )
    case 'ease':
      return (
        <div className="relative w-full max-w-[190px]">
          <svg viewBox="0 0 200 62" className="h-14 w-full" aria-hidden="true">
            <path
              d="M8 54 C 62 54, 72 8, 192 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-brand/70"
            />
          </svg>
          <span className="absolute right-1 top-0 h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="absolute bottom-0 left-0 font-mono text-[6px] text-muted/40">
            ease-in-out
          </span>
        </div>
      )
    case 'duration':
      return (
        <div className="group/pv w-full max-w-[190px] rounded-lg border border-line bg-surface/50 p-3">
          <div className="relative h-2 rounded-full bg-line/50">
            <span className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-brand transition-transform duration-300 group-hover/pv:translate-x-[142px]" />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[6px] text-muted/40">
            <span>0ms</span>
            <span>300ms</span>
          </div>
        </div>
      )
    case 'transition':
    case 'comboTransition':
    case 'translate':
    case 'scale':
    case 'liftScale': {
      const isCombo = variant === 'comboTransition'
      const motion =
        variant === 'translate'
          ? 'group-hover/pv:-translate-y-1'
          : variant === 'scale'
            ? 'group-hover/pv:scale-105'
            : 'group-hover/pv:-translate-y-1 group-hover/pv:scale-105'
      return (
        <div className="group/pv flex h-[70px] w-full items-center justify-center">
          <div
            className={`flex h-12 w-24 flex-col items-center justify-center rounded-xl border border-line bg-surface text-[8px] font-medium text-muted shadow-sm transition-all duration-300 ease-in-out ${
              isCombo
                ? 'group-hover/pv:border-brand/40 group-hover/pv:bg-brand group-hover/pv:text-white dark:group-hover/pv:text-pine'
                : 'group-hover/pv:border-brand/30 group-hover/pv:text-brand'
            } ${variant === 'transition' ? 'group-hover/pv:bg-brand-soft' : ''} ${
              variant === 'transition' ? '' : motion
            }`}
          >
            <span>Hover me</span>
            <span className="mt-0.5 font-mono text-[6.5px] opacity-60">
              {variant === 'comboTransition'
                ? 'all · 300ms'
                : variant === 'translate'
                  ? 'translateY(-4px)'
                  : variant === 'scale'
                    ? 'scale(1.05)'
                    : variant === 'liftScale'
                      ? 'lift + scale'
                      : 'color shift'}
            </span>
          </div>
        </div>
      )
    }
    case 'delay':
      return (
        <div className="group/pv w-full max-w-[190px] rounded-lg border border-line bg-surface/50 p-3">
          <div className="relative h-2 rounded-full bg-line/50">
            <span className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-accent transition-transform delay-150 duration-300 group-hover/pv:translate-x-[140px]" />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[6px] text-muted/40">
            <span>hover</span>
            <span>+150ms</span>
          </div>
        </div>
      )
    case 'motionReduce':
      return (
        <div className="flex items-center gap-2.5 rounded-xl border border-dashed border-line bg-surface/60 px-3 py-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-brand">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[8px] leading-4 text-muted">
            減少動態時
            <br />
            <strong className="font-semibold text-ink">關閉轉場</strong>
          </span>
        </div>
      )
    default:
      return null
  }
}

function ClipVisual({ path }) {
  return (
    <div className="relative flex h-[82px] w-[96px] items-center justify-center">
      <span className="absolute inset-0 rounded-lg border border-dashed border-line" />
      <span
        className="absolute inset-1 bg-gradient-to-br from-[#f59e0b] via-[#e85d8d] to-[#7c6cf0]"
        style={{ clipPath: path }}
      />
    </div>
  )
}

function ClipTextVisual({ variant }) {
  if (variant === 'transparent') {
    return (
      <span
        className="text-[38px] font-black leading-none tracking-tight text-transparent"
        style={{ WebkitTextStroke: '1.25px rgb(100 116 139 / 0.55)' }}
      >
        Aa
      </span>
    )
  }

  const gradient =
    variant === 'full'
      ? 'bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500'
      : 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500'

  return (
    <div className="flex flex-col items-center">
      <span
        className={`${gradient} bg-clip-text text-[29px] font-black leading-none tracking-[-0.03em] text-transparent`}
      >
        Gradient
      </span>
      <span className="mt-2 font-mono text-[6.5px] uppercase tracking-[0.15em] text-muted/45">
        {variant === 'full' ? 'three-color blend' : 'background-clip: text'}
      </span>
    </div>
  )
}

function MaskVisual({ mask }) {
  return (
    <div className="relative h-[76px] w-full max-w-[210px] overflow-hidden rounded-xl border border-line bg-raised">
      <div
        className="h-full w-full bg-gradient-to-br from-[#0ea5e9] via-[#7c6cf0] to-[#e85d8d]"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
      <span className="absolute left-2 top-2 rounded bg-black/15 px-1.5 py-0.5 font-mono text-[6px] tracking-[0.12em] text-white/75">
        MASK
      </span>
    </div>
  )
}

export function StylePreview({ preview }) {
  if (!preview) return null

  switch (preview.type) {
    case 'font':
      return (
        <Frame label={preview.label}>
          <div
            className="flex items-baseline gap-2 leading-none"
            style={{ fontSize: preview.size }}
          >
            <span className="font-semibold tracking-tight text-ink">Aa</span>
            <span className="text-muted/75" style={{ fontSize: `calc(${preview.size} * 0.68)` }}>
              樣式
            </span>
          </div>
        </Frame>
      )

    case 'weight':
      return (
        <Frame label={preview.label}>
          <div className="flex items-baseline gap-2">
            <span className="text-[30px] leading-none text-ink" style={{ fontWeight: preview.weight }}>
              Aa
            </span>
            <span className="text-sm text-muted" style={{ fontWeight: preview.weight }}>
              字體
            </span>
          </div>
        </Frame>
      )

    case 'tracking':
      return (
        <Frame label={preview.label}>
          <span
            className="text-[18px] font-semibold uppercase tracking-tight text-ink"
            style={{ letterSpacing: preview.value }}
          >
            Tight tracking
          </span>
        </Frame>
      )

    case 'leading':
      return (
        <Frame label={preview.label}>
          <p
            className="w-[176px] text-[11px] text-ink/80"
            style={{ lineHeight: preview.value }}
          >
            行高讓段落有呼吸，長文也更容易閱讀。
          </p>
        </Frame>
      )

    case 'transform':
      return (
        <Frame label={preview.label}>
          <span
            className="text-[15px] font-semibold tracking-[0.15em] text-ink"
            style={{ textTransform: preview.transform }}
          >
            {preview.text}
          </span>
        </Frame>
      )

    case 'italic':
      return (
        <Frame label={preview.label}>
          <span className="text-[19px] font-medium italic text-ink">{preview.text}</span>
        </Frame>
      )

    case 'underline':
      return (
        <Frame label={preview.label}>
          <span className="text-[16px] font-medium text-ink underline decoration-brand decoration-2 underline-offset-4">
            {preview.text}
          </span>
        </Frame>
      )

    case 'truncate':
      return (
        <Frame label={preview.label}>
          <div className="flex w-[210px] items-center rounded-lg border border-dashed border-line bg-surface px-2.5 py-2">
            <span className="block truncate text-[11px] text-ink/80">{preview.text}</span>
          </div>
        </Frame>
      )

    case 'swatch':
      return (
        <Frame label={preview.label}>
          <ColorSwatch preview={preview} />
        </Frame>
      )

    case 'textColor':
      return (
        <Frame label={preview.label}>
          <TextColorVisual preview={preview} />
        </Frame>
      )

    case 'borderColor':
      return (
        <Frame label={preview.label}>
          <BorderColorVisual preview={preview} />
        </Frame>
      )

    case 'spacing':
      return (
        <Frame label={preview.label}>
          <SpacingVisual preview={preview} />
        </Frame>
      )

    case 'layout':
      return (
        <Frame label={preview.label}>
          <LayoutVisual variant={preview.variant} />
        </Frame>
      )

    case 'dimension':
      return (
        <Frame label={preview.label}>
          <DimensionVisual preview={preview} />
        </Frame>
      )

    case 'radius':
      return (
        <Frame label={preview.label}>
          <RadiusVisual value={preview.value} />
        </Frame>
      )

    case 'border':
      return (
        <Frame label={preview.label}>
          <BorderVisual preview={preview} />
        </Frame>
      )

    case 'shadow':
      return (
        <Frame label={preview.label}>
          <ShadowVisual value={preview.value} />
        </Frame>
      )

    case 'ring':
      return (
        <Frame label={preview.label}>
          <RingVisual />
        </Frame>
      )

    case 'opacity':
      return (
        <Frame label={preview.label}>
          <OpacityVisual value={preview.value} />
        </Frame>
      )

    case 'responsive':
      return (
        <Frame label={preview.label}>
          <ResponsiveVisual preview={preview} />
        </Frame>
      )

    case 'scroll':
      return (
        <Frame label={preview.label}>
          <ScrollVisual preview={preview} />
        </Frame>
      )

    case 'animation':
      return (
        <Frame label={preview.label}>
          <AnimationVisual variant={preview.variant} />
        </Frame>
      )

    case 'clip':
      return (
        <Frame label={preview.label}>
          <ClipVisual path={preview.path} />
        </Frame>
      )

    case 'clipText':
      return (
        <Frame label={preview.label}>
          <ClipTextVisual variant={preview.variant} />
        </Frame>
      )

    case 'mask':
      return (
        <Frame label={preview.label}>
          <MaskVisual mask={preview.mask} />
        </Frame>
      )

    default:
      return null
  }
}
