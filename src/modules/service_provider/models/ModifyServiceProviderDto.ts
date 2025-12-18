import { ModificationType } from "../../user/models/ModificationType";

export class ModifyServiceProviderDto {
  constructor(
    public modificationType: ModificationType,
    public value: string
  ) {}
}

