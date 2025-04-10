import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Import Tailwind correctly


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
 assetsInclude: ["**/*.PNG", "**/*.JPEG"]
}) 