import { CheckoutPage } from '../../../support/pages/CheckoutPage';

export class AddToCart {
  static async perform(page: CheckoutPage, sku: string, qty = 1) {
    for (let i = 0; i < qty; i++) await page.addItem(sku);
  }
}
