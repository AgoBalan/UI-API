import { test } from '../support/fixtures';
//Since the customzed fixure has test and expect, we no need to export from default like
//import { test } from '@playwright/test';
//import { expect } from '@playwright/test';
import * as SchemaCheck from '../support/data/schemas/login.schema';
import { UserBuilder } from '../support/builders/UserBuilder';
//import { AuthClient } from '../support/clients/AuthClient';
//No need to import the AuthClient,COz our fixture already had it

 //test is playwright inbuilt test runner framework
 //test.describe is like a container for multiple tests.
test.describe('compelte flow', () => { 
  test.skip('Demo', async ({ apiRequest,expect }) => {
      test.info().annotations.push({ type: 'tag', description: '@contract' });
    const creds = new UserBuilder().withUserName('emilys').withPassword('emilyspass').build();
   /* const client = new AuthClient();
    const res = await client.login(creds);
    We avoid calling this separtely ,Due to autCLient in fixure */
    let payload ={"productName":"","minPrice":null,"maxPrice":null,"productCategory":[],"productSubCategory":[],"productFor":[]}
    const res = await apiRequest.getAllProducts(payload);
    const parsed = SchemaCheck.LoginResponseSchema.safeParse(res);
    test.expect(parsed.success, JSON.stringify(parsed.error?.format())).toBeTruthy();
  });

   test.skip('@contract After login get all product details', async ({ apiRequest }) => {
    //Attaching meta data to test run
    //test.info() → gives you access to the current test’s metadata object while it’s running.
    //.annotations → is an array of annotation objects (extra labels or notes you can attach to the test).
      test.info().annotations.push({ type: 'tag', description: '@contract' });
    const creds = new UserBuilder().withUserName('emilys').withPassword('emilyspass').build();
    let payload ={"productName":"","minPrice":null,"maxPrice":null,"productCategory":[],"productSubCategory":[],"productFor":[]}
    const res = await apiRequest.getAllProducts(payload);
    console.log("All prod response"+ JSON.stringify(res));
    // const parsed = SchemaCheck.LoginResponseSchema.safeParse(res);
    // expect(parsed.success, JSON.stringify(parsed.error?.format())).toBeTruthy();
  });
   test('@contract After login get 1 product details', async ({ apiRequest }) => {
      test.info().annotations.push({ type: 'tag', description: '@contract' });
    const creds = new UserBuilder().withUserName('emilys').withPassword('emilyspass').build();
    const res = await apiRequest.getOneProduct();
    console.log("All prod response"+ JSON.stringify(res));
    const parsed = SchemaCheck.ProductViewResponseSchema.safeParse(res); //{ success: true, data: ... }  //{ success: false, error: ... } 
    test.expect(parsed.success, JSON.stringify(parsed.error?.issues)).toBeTruthy();
    //.toBeTruthy()  Asserts that actual is truthy (not false, null, undefined, 0, or "").
  });
});


