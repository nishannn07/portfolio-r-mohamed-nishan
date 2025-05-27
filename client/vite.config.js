import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define environment variables prefix if needed (VITE_ is default)
  // envPrefix: 'APP_',
})
