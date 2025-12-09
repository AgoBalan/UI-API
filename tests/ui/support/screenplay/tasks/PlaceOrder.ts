import { CheckoutPage } from '../../../support/pages/CheckoutPage';
import { AddToCart } from '../interactions/AddToCart';
import { ApplyCoupon } from '../interactions/ApplyCoupon';

export class PlaceOrder {
  static async with(page: CheckoutPage, opts: { sku: string; qty?: number; coupon?: string }) {
    await AddToCart.perform(page, opts.sku, opts.qty ?? 1);
    if (opts.coupon) await ApplyCoupon.perform(page, opts.coupon);
    await page.placeOrder();
  }
}
