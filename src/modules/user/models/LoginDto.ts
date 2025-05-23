export class LoginDto {
  //parameterized properties. Essentially removes the above boiler plate code
  constructor(public email: string, public password: string) {}
}
