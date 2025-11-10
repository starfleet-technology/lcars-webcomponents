import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003
  },
  resolve: {
    alias: {
      '@starfleet-technology/lcars': path.resolve(__dirname, '../../packages/lcars')
    }
  }
})
