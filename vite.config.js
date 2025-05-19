import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,        // vagy: '0.0.0.0' – elérhető legyen a hálózaton
    port: 5173,        // ha fix portot akarsz
    open: false,       // ne nyissa meg automatikusan a böngészőt
  },
})
