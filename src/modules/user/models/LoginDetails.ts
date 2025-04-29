export class LoginDetails {

    constructor(public id: number, public name:string, public surname:string, public email:string,
        public cellNumber:string, public tokenType:string, public accessToken:string, public emailVerified:boolean
    ){

    }
}