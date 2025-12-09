import { Page } from '@playwright/test';

export class CartSummary {
  constructor(private readonly page: Page) {}
  async total(): Promise<number> {
    const text = await this.page.getByTestId('cart-total').textContent();
    return Number(text?.replace(/[^0-9.]/g, '') ?? 0);
  }
}
