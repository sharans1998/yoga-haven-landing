import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://api.fillout.com/v1/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            proxyReq.setHeader('Authorization', `Bearer ${process.env.VITE_FO_API_KEY}`);
            proxyReq.setHeader('Content-Type', 'application/json');
            console.log(`Proxying request: ${req.method} ${req.url}`);
            console.log('Request headers:', proxyReq.getHeaders());
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log(`Received response for: ${req.method} ${req.url}`);
            console.log('Response status:', proxyRes.statusCode);
            console.log('Response headers:', proxyRes.headers);
          });
        },
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/yoga-haven-landing/' : '/'
}));