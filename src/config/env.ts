import 'dotenv/config';
import type { AppEnv } from './types.ts';

  export const env: AppEnv = {
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
  apiBaseUrl: process.env.API_BASE_URL ?? 'http://localhost:3001',
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@example.test',
  adminPassword: process.env.ADMIN_PASSWORD ?? 'Password123!',
  apiToken: process.env.API_TOKEN ?? ''
};
