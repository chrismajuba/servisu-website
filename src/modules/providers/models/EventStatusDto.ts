export class EventStatusDto {
  id: number;
  clientId: number;
  status: number;
  providerId?: number;
  providerFullName?: string;
  providerOccupation?: string;
  providerResponded: boolean;
  requestedDate?: string;
  message?: string;
  pin?: string;

  constructor(
    id: number,
    clientId: number,
    status: number,
    providerId?: number,
    providerFullName?: string,
    providerOccupation?: string,
    providerResponded: boolean = false,
    requestedDate?: string,
    message?: string,
    pin?: string
  ) {
    this.id = id;
    this.clientId = clientId;
    this.status = status;
    this.providerId = providerId;
    this.providerFullName = providerFullName;
    this.providerOccupation = providerOccupation;
    this.providerResponded = providerResponded;
    this.requestedDate = requestedDate;
    this.message = message;
    this.pin = pin;
  }
}
