import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/user': {
        target: 'http://182.92.3.1:15555',
        changeOrigin: true
      },
      '/mood-records': {
        target: 'http://182.92.3.1:15555',
        changeOrigin: true
      },
      '/self-discovery': {
        target: 'http://182.92.3.1:15555',
        changeOrigin: true
      }
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
