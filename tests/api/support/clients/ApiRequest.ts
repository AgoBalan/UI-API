import { HttpClient } from './HttpClient';

export type LoginRequest = { email: string; password: string };
export type LoginResponse = {
  code: number;          // because "code" is 0 (a number)
  message: string;       // "success"
  data: {
    Id: number;          // 17
    Name: string;        // "ankishRR"
    Email: string;       // "thapliyalankiish9258@gmail.com"
  };
};
export class ApiRequest {
 // private → only accessible inside the class.
 //readonly → cannot be reassigned after construction.
  constructor(private readonly http = new HttpClient()) {}
  login(body: LoginRequest) {
    /*return this.http.request<LoginResponse>('auth/login', {  // generic -> <LoginResponse>
      method: 'POST',
      body: JSON.stringify(body)
    },'admin'); */
    return this.http.request<LoginResponse>('auth/login', {  // generic -> <LoginResponse>
      method: 'POST',
      body: JSON.stringify(body)
    },'user');
  }

  getAllProducts(body: any) {
    return this.http.request('/product/get-all-products', {  // no generic expected response format
      method: 'POST',
      body: JSON.stringify(body)
    },'user');
  }
}

//With out generic
  /*<LoginResponse> tells complier this method return data like that foramt
  this.http.request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(body)
  });
  If you call request like this, TypeScript will infer the return type as whatever HttpClient.
  request is declared to return (often any or Promise<any> if no type is specified).

  That means you lose type safety: you won’t get autocomplete for .token or .userId, and
  TypeScript won’t warn you if you try to access a property that doesn’t exist.
With a generic
  Here you’re telling TypeScript: “I expect the response to look like LoginResponse.”
  Now the compiler enforces that the result has token and userId.
  You get autocomplete and type checking when you use the response. */