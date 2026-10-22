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

    default:
      return null
  }
}
