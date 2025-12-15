import dotenv from "dotenv";
import type { AppEnv } from './types.ts';

dotenv.config({path:".env.example"})
  export const env: AppEnv = {
    // process.env will not call the .env file directly,
    //  Whichever the .env file called recently by dotenv.config({path:".env.example"})
    //it picks values from that file
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000', 
  apiBaseUrl: process.env.API_BASE_URL ?? 'http://localhost:3001',
  apiPathUrl: process.env.API_PATH_URL ?? '',
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@example.test',
  adminPassword: process.env.ADMIN_PASSWORD ?? 'Password123!',
  userEmail: process.env.USER_EMAIL ?? 'user@example.test',
  userPassword: process.env.USER_PASSWORD ?? 'Password123!',
  apiToken: process.env.API_TOKEN ?? ''
};
