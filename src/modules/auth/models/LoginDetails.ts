export class LoginResponseDto {
  welcomeMessage: string;
  id: number;
  name: string;
  surname: string;
  email: string;
  cellNumber: string;
  tokenType: string;
  accessToken: string;
  emailVerified: boolean;
  authenticated: boolean;

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    cellNumber: string,
    tokenType: string,
    accessToken: string,
    isEmailVerified: boolean,
    isAuthenticated: boolean
  ) {
    this.welcomeMessage =
      "Welcome to We Serve Inc. \nHow can we be of service?";
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.cellNumber = cellNumber;
    this.tokenType = tokenType;
    this.accessToken = accessToken;
    this.emailVerified = isEmailVerified;
    this.authenticated = isAuthenticated;
  }
}
