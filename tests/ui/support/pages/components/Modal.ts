import { Page, expect } from '@playwright/test';

export class Modal {
  constructor(private readonly page: Page, private readonly testId: string) {}
  async open() { await this.page.getByTestId(`${this.testId}-open`).click(); }
  async close() { await this.page.getByTestId(`${this.testId}-close`).click(); }
  async assertVisible() { await expect(this.page.getByTestId(`${this.testId}`)).toBeVisible(); }
}
