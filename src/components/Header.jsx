import { Moon, Sun } from 'lucide-react'
import { GithubMark, LogoMark } from './Brand'
import { SearchBox } from './SearchBox'

const repositoryUrl = 'https://github.com/shernwu-creator/tailwind_cheatsheet'

export function Header({
  query,
  onQueryChange,
  inputRef,
  isDark,
  onToggleTheme,
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center gap-3 px-4 sm:gap-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 rounded-lg"
          aria-label="Tailwind 速查首頁"
        >
          <LogoMark className="h-9 w-9 shrink-0 drop-shadow-sm" />
          <span className="hidden min-w-0 sm:block">
            <span className="block whitespace-nowrap text-[14px] font-semibold leading-tight tracking-tight text-ink">
              Tailwind 速查
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[8.5px] font-semibold uppercase tracking-[0.19em] text-muted">
              Personal cheatsheet
            </span>
          </span>
        </a>

        <span className="hidden h-6 w-px bg-line md:block" aria-hidden="true" />

        <div className="mx-auto min-w-0 flex-1 md:max-w-[540px]">
          <SearchBox
            query={query}
            onQueryChange={onQueryChange}
            inputRef={inputRef}
          />
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-muted/30 hover:text-ink sm:flex"
            aria-label="前往 GitHub 倉庫"
            title="GitHub 倉庫"
          >
            <GithubMark className="h-[17px] w-[17px]" />
          </a>

          <button
            type="button"
            onClick={onToggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-muted/30 hover:text-ink"
            aria-label={isDark ? '切換為淺色模式' : '切換為深色模式'}
            title={isDark ? '切換為淺色模式' : '切換為深色模式'}
          >
            <Sun
              className={`absolute h-[17px] w-[17px] transition-all duration-300 ${
                isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0'
              }`}
              aria-hidden="true"
            />
            <Moon
              className={`absolute h-[17px] w-[17px] transition-all duration-300 ${
                isDark ? '-rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
