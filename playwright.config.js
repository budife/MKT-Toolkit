import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:5501' },
  webServer: { command: 'npx http-server . -p 5501 -c-1', port: 5501, reuseExistingServer: true },
});
