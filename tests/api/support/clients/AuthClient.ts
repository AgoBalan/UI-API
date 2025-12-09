import { HttpClient } from './HttpClient';

export type LoginRequest = { email: string; password: string };
export type LoginResponse = { token: string; userId: string };

export class AuthClient {
  constructor(private readonly http = new HttpClient()) {}
  login(body: LoginRequest) {
    return this.http.request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }
}
