import { OrdersClient, type CreateOrderRequest, type CreateOrderResponse } from '../clients/OrdersClient';

export class OrdersRepository {
  constructor(private readonly client = new OrdersClient()) {}

  async createOrderSafe(req: CreateOrderRequest): Promise<CreateOrderResponse> {
    // Example retry strategy for transient errors
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await this.client.create(req);
      } catch (err) {
        if (attempt === maxAttempts) throw err;
        await new Promise((r) => setTimeout(r, 250 * attempt));
      }
    }
    throw new Error('Unreachable');
  }

  async waitUntilConfirmed(orderId: string): Promise<CreateOrderResponse> {
    for (let i = 0; i < 10; i++) {
      const res = await this.client.get(orderId);
      if (res.status === 'confirmed') return res;
      await new Promise((r) => setTimeout(r, 300));
    }
    throw new Error(`Order ${orderId} not confirmed in time`);
  }
}
