import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Simple',
        short_name: 'Simple',
        description: 'Simple Valuation Calculator',
        theme_color: '#ffffff',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icon-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})
