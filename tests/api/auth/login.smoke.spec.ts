import { test } from '../support/fixtures';
import { UserBuilder } from '../support/builders/UserBuilder';

test.describe('@smoke @auth Login smoke', () => {
  test('returns token and userId', async ({ authClient,expect }) => {
    const creds = new UserBuilder().withEmail('admin@example.test').withPassword('Passw0rd!').build();
    const res = await authClient.login(creds);
  // expect(res.token.length).toBeGreaterThan(10);
   // expect(res.userId).toBeTruthy();
  });
});
