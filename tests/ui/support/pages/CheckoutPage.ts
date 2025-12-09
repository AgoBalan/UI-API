import { Page, expect } from '@playwright/test';
import { CartSummary } from './components/CartSummary';

export class CheckoutPage {
  readonly cart: CartSummary;
  constructor(private readonly page: Page) {
    this.cart = new CartSummary(page);
  }
  async goto() { await this.page.goto('/checkout'); }
  async addItem(sku: string) { await this.page.getByTestId(`add-${sku}`).click(); }
  async applyCoupon(code: string) {
    await this.page.getByLabel('Coupon').fill(code);
    await this.page.getByRole('button', { name: 'Apply' }).click();
  }
  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place order' }).click();
    await expect(this.page.getByText('Order confirmed')).toBeVisible();
  }
}
