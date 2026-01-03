import { env } from '../../../../src/config/env';

type TokenType = 'user' | 'admin';

export class TokenManager {
 
  private static tokens: Record<TokenType, string | null> = {
    user: null,
    admin: null,
  };

  // Method to get a token for a specific type
  static async getToken(type: TokenType = 'user'): Promise<string> {
    if (!this.tokens[type]) {
      console.log(`Token for ${type} not found. Generating a new token...`);
      this.tokens[type] = await this.generateToken(type);
    }
    return this.tokens[type]!;
  }

  // Method to clear a specific token (if needed)
  static clearToken(type: TokenType = 'user'): void {
    this.tokens[type] = null;
  }

  // Private method to generate a new token based on the type
  private static async generateToken(type: TokenType): Promise<string> {
    const credentials =
      type === 'admin'
        ? { username: env.adminEmail, password: env.adminPassword }
        : { userEmail: env.userEmail, userPassword: env.userPassword };

    const res = await fetch(env.apiBaseUrl+env.apiPathUrl+"/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error(`Failed to generate ${type} token: HTTP ${res.status}`);
    const data = await res.json();
  //  console.log(`Generated ${type} Token:`, data.token);
    return data.token;
  }
}