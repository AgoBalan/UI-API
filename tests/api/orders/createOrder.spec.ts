// import { test, expect } from '../support/fixtures';
// import { OrderBuilder } from '../support/builders/OrderBuilder';
// import { CreateOrderResponseSchema } from '../support/data/schemas/order.schema';

// test.describe('@e2e @orders Create order', () => {
//   test('creates and confirms an order', async ({ ordersRepo }) => {
//     const req = new OrderBuilder()
//       .withItem('SKU-123', 2)
//       .build();

//     const created = await ordersRepo.createOrderSafe(req);
//     const parsed = CreateOrderResponseSchema.safeParse(created);
//     expect(parsed.success, JSON.stringify(parsed.error?.format())).toBeTruthy();

//     const confirmed = await ordersRepo.waitUntilConfirmed(created.orderId);
//     expect(confirmed.status).toBe('confirmed');
//     expect(confirmed.total).toBeGreaterThan(0);
//   });
// });
