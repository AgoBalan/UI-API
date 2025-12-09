import { test, expect } from '../support/fixtures';
import { OrdersRepository } from '../support/repository/OrdersRepository';
import { OrderBuilder } from '../support/builders/OrderBuilder';

test.describe('@component @orders Repository behavior', () => {
  test('retry strategy eventually succeeds', async () => {
    const repo = new OrdersRepository();
    const req = new OrderBuilder().withItem('SKU-456', 1).build();
    const created = await repo.createOrderSafe(req);
    expect(created.orderId).toBeTruthy();
  });
});
