export class UserBuilder {
  //Inside a class, you don’t use let, var, or const to declare fields.
  //private is a TypeScript access modifier. It means:
  private email = `user.${Date.now()}@example.test`; //default email
  private password = 'Password123!';  // default password
  private user = "user";
  withEmail(email: string) { this.email = email; return this; }
  withUserName(user: string) { this.user = user; return this; }
  withPassword(password: string) { this.password = password; return this; }
  build() { return { email: this.email, password: this.password }; }
}


/* let, var, and const are used for local variables inside functions or blocks.
function foo() {
  const x = 10; // local variable
} */



