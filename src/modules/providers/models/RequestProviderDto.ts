import { Address } from "./Address";

export class RequestProviderDto {
  address: Address;
  clientName: String;
  clientSurname: String;
  email: String;
  cellNumber: String;
  providerId: number;
  requestDate: String; // DD/MM/YYYY
  deviceToken: string; //From FCM

  constructor(
    address: Address,
    clientName: String,
    clientSurname: String,
    email: String,
    cellNumber: String,
    providerId: number,
    requestDate: string,
    deviceToken: string
  ) {
    this.address = address;
    this.clientName = clientName;
    this.clientSurname = clientSurname;
    this.email = email;
    this.cellNumber = cellNumber;
    this.providerId = providerId;
    this.requestDate = requestDate;
    this.deviceToken = deviceToken;
  }
}
