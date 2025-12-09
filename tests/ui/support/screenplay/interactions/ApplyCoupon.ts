import { CheckoutPage } from '../../../support/pages/CheckoutPage';

export class ApplyCoupon {
  static async perform(page: CheckoutPage, code: string) {
    await page.applyCoupon(code);
  }
}
