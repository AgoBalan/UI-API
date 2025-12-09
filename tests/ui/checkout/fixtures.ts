import { test as base } from '@playwright/test';
import { CheckoutPage } from '../support/pages/CheckoutPage';

type Fixtures = { checkoutPage: CheckoutPage };

export const test = base.extend<Fixtures>({
  checkoutPage: async ({ page }, use) => {
    const cp = new CheckoutPage(page);
    await cp.goto();
    await use(cp);
  }
});

export { expect } from '@playwright/test';
