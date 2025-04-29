export class LoginDto {
  //parameterized properties. Essentially removes the above boiler plate code
  constructor(private email: string, private password: string) {}

  //set & get keywords allow us to write code like this loginDto.setEmail = "new Email" instead of loginDto.setEmail("new EMail")
  set setEmail(newEmail: string) {
    this.email = newEmail;
  }

  get getEmail() {
    return this.email;
  }

  set setPassword(newPassword: string) {
    this.password = newPassword;
  }

  get getPassword() {
    return this.password;
  }
}
