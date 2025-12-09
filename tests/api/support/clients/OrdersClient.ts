import { HttpClient } from './HttpClient';

export type CreateOrderItem = { sku: string; qty: number };
export type CreateOrderRequest = { items: CreateOrderItem[]; address: any; payment: any };
export type CreateOrderResponse = { orderId: string; status: 'confirmed' | 'pending'; total: number };

export class OrdersClient {
  constructor(private readonly http = new HttpClient()) {}
  create(body: CreateOrderRequest) {
    return this.http.request<CreateOrderResponse>('/orders', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }
  get(orderId: string) {
    return this.http.request<CreateOrderResponse>(`/orders/${orderId}`, { method: 'GET' });
  }
}
