export class EventStatusDto {
  id: number;
  clientID: number;
  status: number;
  providerId?: number;
  providerName?: string;
  providerSurname?: string;
  providerOccupation?: string;
  providerResponded: boolean;
  requestedDate?: string;
  message?: string;

  constructor(
    id: number,
    clientID: number,
    status: number,
    providerResponded: boolean,
    providerId?: number,
    providerName?: string,
    providerSurname?: string,
    providerOccupation?: string,
    requestedDate?: string,
    message?: string
  ) {
    this.id = id;
    this.clientID = clientID;
    this.status = status;
    this.providerId = providerId;
    this.providerName = providerName;
    this.providerSurname = providerSurname;
    this.providerOccupation = providerOccupation;
    this.providerResponded = providerResponded;
    this.requestedDate = requestedDate;
    this.message = message;
  }
}
