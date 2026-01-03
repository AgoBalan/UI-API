//@playwright is scoped namespace and package is test
import { test as base, expect } from '@playwright/test'; //Import the test function, but locally refer to it by the name base.
import { ApiRequest } from './clients/ApiRequest';
import { OrdersRepository } from './repository/OrdersRepository';

type Fixtures = {         //Declaring shape of the object
  apiRequest: ApiRequest;
  ordersRepo: OrdersRepository;
  expect: typeof expect;
};

//Syntax to add user defined fixures in test by extending it  base.extend<Fixtures>
//Fixtures are values (objects, functions, etc.) that Playwright automatically sets up and gives to your tests.
export const test = base.extend<Fixtures>({
  //use is a fucntion given during extending fxture, 
  // It's duty to hand the value you’ve created to Playwright so it can inject it into the test.
  apiRequest: async ({}, use) => use(new ApiRequest()),   // lazy laoding,if test case ask create object else wont create
  ordersRepo: async ({}, use) => use(new OrdersRepository()),  // ordersRepo is a fixture
  expect: async ({}, use) => use(expect)  // expect is a fixture
});



/* Why fixtures are useful
1.Avoid duplication You don’t have to new AuthClient() in every test file. Playwright does it for you.
2.Centralized setup/teardown If AuthClient ever needs special initialization (e.g. reading config, authenticating, cleaning up), you define it once in the fixture. All tests benefit automatically.
3.Consistency Every test gets the same kind of AuthClient — no risk of someone forgetting a step or mis‑configuring it.
4.Isolation Each test gets its own fresh instance. Playwright ensures they don’t leak state between tests.
5.Scalability As your suite grows, you’ll likely have multiple clients, repositories, or utilities. Fixtures let you compose them cleanly instead of cluttering every spec with boilerplate.
*/