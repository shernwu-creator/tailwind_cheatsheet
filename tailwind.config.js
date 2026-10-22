/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--c-canvas) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        raised: 'rgb(var(--c-raised) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        brand: 'rgb(var(--c-brand) / <alpha-value>)',
        'brand-soft': 'rgb(var(--c-brand-soft) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        pine: '#10251f',
        cream: '#f6f4ed',
        lime: '#d8f3b0',
      },
      fontFamily: {
        sans: [
          '"Avenir Next"',
          '"Segoe UI"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Noto Sans TC"',
          '"PingFang TC"',
          '"Microsoft JhengHei"',
          'sans-serif',
        ],
        mono: [
          '"SFMono-Regular"',
          '"Cascadia Code"',
          '"Roboto Mono"',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgb(16 37 31 / 0.04), 0 10px 30px -18px rgb(16 37 31 / 0.18)',
        lift: '0 18px 45px -22px rgb(16 37 31 / 0.35)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translate(-50%, 18px) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, 0) scale(1)' },
        },
        'toast-bar': {
          from: { transform: 'scaleX(1)' },
          to: { transform: 'scaleX(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.65) rotate(-8deg)', opacity: '0' },
          '60%': { transform: 'scale(1.15) rotate(2deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-9px) rotate(1deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
        'toast-in': 'toast-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both',
        'toast-bar': 'toast-bar 2.4s linear forwards',
        pop: 'pop 0.34s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
