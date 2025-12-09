import { test as base } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';
import { env } from '../../../src/config/env';

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const lp = new LoginPage(page);
    await lp.goto();
    await lp.fillEmail(env.adminEmail);
    await lp.fillPassword(env.adminPassword);
    await lp.submit();
    await lp.assertLoggedIn();
    await use(lp);
  }
});

export { expect } from '@playwright/test';
