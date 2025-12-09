import type { CreateOrderRequest } from '../clients/OrdersClient';
import { defaultAddress, defaultPayment } from '../data/objectMother';

export class OrderBuilder {
  private payload: CreateOrderRequest = { items: [], address: defaultAddress(), payment: defaultPayment() };
  withItem(sku: string, qty = 1) { this.payload.items.push({ sku, qty }); return this; }
  withAddress(address: any) { this.payload.address = address; return this; }
  withPayment(payment: any) { this.payload.payment = payment; return this; }
  build(): CreateOrderRequest { return this.payload; }
}
