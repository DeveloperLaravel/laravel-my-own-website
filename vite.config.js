import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: {
        app: 'resources/js/app.js',   // عام
        auth: 'resources/js/auth.js', // خاص بتسجيل الدخول
      },
      refresh: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        app: 'resources/js/app.js',
        auth: 'resources/js/auth.js',
      },
    },
    // CSS تفصل حسب كل مدخل تلقائيًا
  },
});
