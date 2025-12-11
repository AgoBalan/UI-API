import { test } from '../support/fixtures';
//Since the customzed fixure has test and expect, we no need to export from default like
//import { test } from '@playwright/test';
//import { expect } from '@playwright/test';
import { LoginResponseSchema } from '../support/data/schemas/login.schema';
import { UserBuilder } from '../support/builders/UserBuilder';
//import { AuthClient } from '../support/clients/AuthClient';
//No need to import the AuthClient,COz our fixture already had it

 //test is playwright inbuilt test runner framework
 //test.describe is like a container for multiple tests.
test.describe(' @auth Login contract', () => { 
  test('@contract login response matches schema', async ({ authClient,expect }) => {
      test.info().annotations.push({ type: 'tag', description: '@contract' });
    const creds = new UserBuilder().withUserName('emilys').withPassword('emilyspass').build();
   /* const client = new AuthClient();
    const res = await client.login(creds);
    We avoid calling this separtely ,Due to autCLient in fixure */
    const res = await authClient.login(creds);
    const parsed = LoginResponseSchema.safeParse(res);
    expect(parsed.success, JSON.stringify(parsed.error?.format())).toBeTruthy();
  });
});

