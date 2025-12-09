import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}
  async goto() { await this.page.goto('/login'); }
  async fillEmail(email: string) { await this.page.getByLabel('Email').fill(email); }
  async fillPassword(password: string) { await this.page.getByLabel('Password').fill(password); }
  async submit() { await this.page.getByRole('button', { name: 'Sign in' }).click(); }
  async assertLoggedIn() {
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
}
