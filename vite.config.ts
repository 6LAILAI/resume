import { defineConfig } from 'vite'

export default defineConfig({
  base: '/resume/',
  server: {
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-three': ['three'],
        },
      },
    },
  },
})

