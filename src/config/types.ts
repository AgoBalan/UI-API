export type AppEnv = {
  baseUrl: string;
  apiBaseUrl: string;
  adminEmail: string;
  adminPassword: string;
  apiToken: string;
};

/*🧩 Purpose of AppEnv Type
In TypeScript, type is used to define the shape of data (like a blueprint).
Here, AppEnv describes what your application environment configuration should look like.
It ensures that whenever you use environment-related values (like URLs or tokens), TypeScript can check that:
They exist.
They are strings.
You don’t accidentally misspell or forget one. 

📂 Why in src/config/types.ts?
Projects often keep types in a dedicated file (types.ts) inside a config folder.
This makes it easy to:
Centralize definitions (one source of truth).
Reuse across the app without duplicating.
Keep environment-related code organized.  

⚙️ Example Usage
Imagine you load environment variables like this:

ts
import { AppEnv } from './config/types';

const env: AppEnv = {
  baseUrl: process.env.BASE_URL!,
  apiBaseUrl: process.env.API_BASE_URL!,
  adminEmail: process.env.ADMIN_EMAIL!,
  adminPassword: process.env.ADMIN_PASSWORD!,
  apiToken: process.env.API_TOKEN!,
};    

TypeScript will validate that env has all the required keys and that they’re strings.
If you forget one (say apiToken), TypeScript will throw an error at compile time. 

✅ In Simple Terms
This AppEnv type is just a contract saying: "Whenever we deal with app environment settings,
 they must include these five string values."
It’s there to prevent bugs and make your codebase more predictable.

*/