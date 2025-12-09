import { test, expect } from './fixtures';
import { PlaceOrder } from '../support/screenplay/tasks/PlaceOrder';
import { CartTotal } from '../support/screenplay/questions/CartTotal';

test.describe('@e2e @checkout Place order', () => {
  test('places an order with coupon and verifies total', async ({ checkoutPage }) => {
    await PlaceOrder.with(checkoutPage, { sku: 'SKU-123', qty: 2, coupon: 'SAVE10' });
    const total = await CartTotal.answeredBy(checkoutPage);
    expect(total).toBeGreaterThan(0);
  });
});


