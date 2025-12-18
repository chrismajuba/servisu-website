export class ServiceProviderRegistrationDto {
  constructor(
    public fullName: string,
    public email: string,
    public cellNumber: string,
    public password: string,
    public occupationId: number,
    public experience: number
  ) {}
}

