import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/docs/index.html",
  },
});
// vite.config.js
// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// export default defineConfig({
//   plugins: [reactRefresh()],
//   css: {
//     postcss: {
//       plugins: [
//         require('tailwindcss')(),
//         require('autoprefixer')(),
//       ],
//     },
//   },
// });

