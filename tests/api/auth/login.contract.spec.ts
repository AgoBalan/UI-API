import { test, expect } from '../support/fixtures';
import { LoginResponseSchema } from '../support/data/schemas/login.schema';
import { UserBuilder } from '../support/builders/UserBuilder';
import { AuthClient } from '../support/clients/AuthClient';

test.describe('@contract @auth Login contract', () => {
  test('login response matches schema', async () => {
    const creds = new UserBuilder().withEmail('admin@example.test').withPassword('Passw0rd!').build();
    const client = new AuthClient();
    const res = await client.login(creds);
    const parsed = LoginResponseSchema.safeParse(res);
    expect(parsed.success, JSON.stringify(parsed.error?.format())).toBeTruthy();
  });
});
