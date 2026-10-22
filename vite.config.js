import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tailwind_cheatsheet/',
  plugins: [react()],
})
