import { ModificationType } from "./ModificationType";

export class ModifyUserAccountDto {
  modificationType?: ModificationType;
  email?: string;
  password?: string;
  newEmail?: string;
  newCellNumber?: string;
  newPassword?: string;

  constructor(
    modificationType?: ModificationType,
    email?: string,
    password?: string,
    newEmail?: string,
    newCellNumber?: string,
    newPassword?: string
  ) {
    this.modificationType = modificationType;
    this.email = email;
    this.password = password;
    this.newEmail = newEmail;
    this.newCellNumber = newCellNumber;
    this.newPassword = newPassword;
  }
}
