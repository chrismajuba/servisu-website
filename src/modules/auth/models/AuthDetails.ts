export class AuthDetails{
    accessToken: string;
    tokenType: string;
    authenticated: boolean;

    constructor(accessToken:string,tokenType: string, authenticated:boolean){
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.authenticated = authenticated;
    }
}