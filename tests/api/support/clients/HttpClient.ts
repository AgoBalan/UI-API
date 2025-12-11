import { env } from '../../../../src/config/env';

async function generateToken(): Promise<string> {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass'
    })
  });

  if (!res.ok) throw new Error(`Failed to generate token: HTTP ${res.status}`);
  const data = await res.json();
  console.log("Token:", data.accessToken);
  return data.accessToken;
}

export class HttpClient {
  constructor(private readonly baseUrl = env.apiBaseUrl, private readonly token = env.apiToken) {}

  async request<T>(path: string, init: RequestInit = { headers: { 'Content-Type': 'application/json' }}): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    let authToken = this.token;

    if (!authToken) {
      console.log("Auth token is empty. Generating a new token...");
      authToken = await generateToken();
    }

    const headers = {
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...(init.headers ?? {})
    };

    console.log("Request URL:", url);
    console.log("Request Headers:", headers);

    const res = await fetch(url, {
      ...init,
      headers
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    return (await res.json()) as T;
  }
}



/*  async request<T>(path: string, init: RequestInit = {}): Promise<T> {
 request<T> implies this method can return any type depends on what user calls
 but Promise<T> says yhis method always reqturn data type of Promise<T>

 const res = await fetch(url, options);
 Second parameter: an options object that configures the request (method, headers, body, etc.).

 Why the second parameter is an object?
  The fetch API lets you customize the request. For example:

  ts
  fetch('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ foo: 'bar' })
  });

  Note:If you don’t pass the second parameter, fetch defaults to a simple GET request.
  
  init variable ... is Spread opertaor:
  USing intit you can set default values

  1. res.ok
res is the response object returned by fetch.

res.ok is a boolean provided by the Fetch API.

It’s true if the status code is in the range 200–299 (successful response).

It’s false if the status code is outside that range (like 400, 404, 500) */