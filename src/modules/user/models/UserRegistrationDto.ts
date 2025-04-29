export class UserRegistrationDto {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public cellNumber: string,
    public password: string
  ) {}
}
