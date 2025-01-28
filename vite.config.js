
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            archivo: ['Archivo', 'sans-serif'],
          },
        },
      },
    }),
  ],
})

