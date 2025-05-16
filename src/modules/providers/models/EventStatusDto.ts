export class EventStatusDto {
  id: number;
  clientId: number;
  status: number;
  providerId?: number;
  providerName?: string;
  providerSurname?: string;
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
    providerName?: string,
    providerSurname?: string,
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
    this.providerName = providerName;
    this.providerSurname = providerSurname;
    this.providerOccupation = providerOccupation;
    this.providerResponded = providerResponded;
    this.requestedDate = requestedDate;
    this.message = message;
    this.pin = pin;
  }

  toJSON() {
    return {
      id: this.id,
      clientId: this.clientId,
      status: this.status,
      providerId: this.providerId,
      providerName: this.providerName,
      providerSurname: this.providerSurname,
      providerOccupation: this.providerOccupation,
      providerResponded: this.providerResponded,
      requestedDate: this.requestedDate,
      message: this.message,
      pin: this.pin,
    };
  }
}
