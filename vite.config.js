import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/DevAI/', // This is the subdirectory where your app will be deployed
  plugins: [react()],
});
