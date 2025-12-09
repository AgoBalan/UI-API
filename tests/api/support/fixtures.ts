import { test as base, expect } from '@playwright/test';
import { AuthClient } from './clients/AuthClient';
import { OrdersRepository } from './repository/OrdersRepository';

type Fixtures = {
  authClient: AuthClient;
  ordersRepo: OrdersRepository;
  expect: typeof expect;
};

export const test = base.extend<Fixtures>({
  authClient: async ({}, use) => use(new AuthClient()),
  ordersRepo: async ({}, use) => use(new OrdersRepository()),
  expect: async ({}, use) => use(expect)
});
export { expect };

