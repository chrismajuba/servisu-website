import OccupationDto from "../../providers/models/OccupationDto";

export class ServiceProviderDetails {
  constructor(
    public id: number,
    public fullName: string,
    public email: string,
    public cellNumber: string,
    public emailVerified: boolean,
    public occupation: OccupationDto,
    public experience: number,
    public rating: number,
    public calls: number,
    public availableWorkDays: string
  ) {}
}

