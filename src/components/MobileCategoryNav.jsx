import { Layers } from 'lucide-react'
import { CategoryIcon } from './CategoryIcon'

export function MobileCategoryNav({
  categories,
  counts,
  total,
  activeCategory,
  onSelect,
}) {
  return (
    <div className="lg:hidden">
      <div
        className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1.5 sm:-mx-6 sm:px-6"
        role="navigation"
        aria-label="樣式分類快速導覽"
      >
        <button
          type="button"
          onClick={() => onSelect('all')}
          aria-current={activeCategory === 'all' ? 'page' : undefined}
          className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs font-semibold transition-colors ${
            activeCategory === 'all'
              ? 'border-pine bg-pine text-cream'
              : 'border-line bg-surface text-muted hover:text-ink'
          }`}
        >
          <Layers
            className={`h-3.5 w-3.5 ${activeCategory === 'all' ? 'text-lime' : ''}`}
            strokeWidth={2}
            aria-hidden="true"
          />
          全部
          <span
            className={`font-mono text-[9px] ${
              activeCategory === 'all' ? 'text-cream/45' : 'text-muted/55'
            }`}
          >
            {total}
          </span>
        </button>

        {categories.map((category) => {
          const active = activeCategory === category.id
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              aria-current={active ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                active
                  ? 'border-pine bg-pine text-cream'
                  : 'border-line bg-surface text-muted hover:text-ink'
              }`}
            >
              <CategoryIcon
                name={category.icon}
                className="h-3.5 w-3.5"
                style={{ color: active ? category.accent : undefined }}
                strokeWidth={2}
                aria-hidden="true"
              />
              {category.name}
              <span
                className={`font-mono text-[9px] ${
                  active ? 'text-cream/45' : 'text-muted/55'
                }`}
              >
                {counts[category.id] || 0}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
