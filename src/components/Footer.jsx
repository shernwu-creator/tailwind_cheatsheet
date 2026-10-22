import { ArrowUpRight } from 'lucide-react'
import { GithubMark, LogoMark } from './Brand'

export function Footer({ total }) {
  return (
    <footer className="mt-16 border-t border-line pb-10 pt-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7" />
            <div>
              <p className="text-xs font-semibold tracking-tight text-ink">
                Tailwind 速查 · 個人樣式工具庫
              </p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-muted/55">
                Built for everyday interfaces
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-md text-[10.5px] leading-5 text-muted/65">
            以 Tailwind CSS v3.4 預設主題整理，共收錄 {total} 個常用樣式。
            所有 CSS 數值皆可在自訂主題中調整。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10.5px] text-muted/70">
          <span className="font-mono">Tailwind CSS v3.4</span>
          <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-brand"
          >
            官方文件
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/shernwu-creator/tailwind_cheatsheet"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
          >
            <GithubMark className="h-3.5 w-3.5" />
            GitHub
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
