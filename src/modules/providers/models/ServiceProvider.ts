import OccupationDto from "./OccupationDto";

class ServiceProvider{

    name: string;
    surname: string;
    email:string;
    cellNUmber: string;
    rating: number;
    calls: number;
    experience: number;
    occupation: OccupationDto;
    availableWorkDays : string;

    constructor(name:string,surname:string,email:string,cellNumber:string,rating: number,calls:number,experience:number, occupation:OccupationDto,
        availableWorkDays:string){
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


    /**
     * 	private Long id;
	private String name;
	private String surname;
	private String email;
	private String cellNumber;
	private double rating;
	private int calls;
	private double experience;
	private OccupationDto occupation;
	private String availableWorkDays;
     */

}

export default ServiceProvider;