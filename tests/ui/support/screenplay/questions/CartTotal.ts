import { CheckoutPage } from '../../../support/pages/CheckoutPage';

export class CartTotal {
  static async answeredBy(page: CheckoutPage): Promise<number> {
    return page.cart.total();
  }
}
