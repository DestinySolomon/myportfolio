import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/myportfolio",
  define: {
    __BASE_PATH__: JSON.stringify('/'),
    __IS_PREVIEW__: JSON.stringify(false),
  },
})
