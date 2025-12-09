export class UserBuilder {
  private email = `user.${Date.now()}@example.test`;
  private password = 'Password123!';
  withEmail(email: string) { this.email = email; return this; }
  withPassword(password: string) { this.password = password; return this; }
  build() { return { email: this.email, password: this.password }; }
}
