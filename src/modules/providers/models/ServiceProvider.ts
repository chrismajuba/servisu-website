import OccupationDto from "./OccupationDto";

class ServiceProvider {
  name: string;
  surname: string;
  email: string;
  cellNUmber: string;
  rating: number;
  calls: number;
  experience: number;
  occupation: OccupationDto;
  availableWorkDays: string;

  constructor(
    name: string,
    surname: string,
    email: string,
    cellNumber: string,
    rating: number,
    calls: number,
    experience: number,
    occupation: OccupationDto,
    availableWorkDays: string
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.rating = rating;
    this.calls = calls;
    this.cellNUmber = cellNumber;
    this.experience = experience;
    this.occupation = occupation;
    this.availableWorkDays = availableWorkDays;
  }
}

export default ServiceProvider;
