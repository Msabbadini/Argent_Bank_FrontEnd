import HttpClient from "./http";

class AuthApi {

    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient("http://localhost:3001/api/v1/");
    }

    set auth(token:string) {
        this.httpClient.auth = token;
    }


    async login(email: string, password: string) {
        const response = await this.httpClient.post({
            route:'user/login', 
            data:{ email, password }
        });
        return response;
    }


    async signup(email: string, password: string,firstname: string, lastname:string) {
        const response = await this.httpClient.post({
            route:'user/signup', 
            data:{ email, password, firstname, lastname }
        });
        return response;
    }

}

export default AuthApi;
