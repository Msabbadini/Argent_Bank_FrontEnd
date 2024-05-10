import HttpClient from "./http";

class UserApi {

    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient("http://localhost:3001/api/v1/");
    }

    set auth(token:string) {
        this.httpClient.auth = token;
    }

    async getProfil() {
        const response = await this.httpClient.post({
            route:'user/profile', 
            authentified: true,
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

    async editProfile(firstname: string, lastname: string) {
        const response = await this.httpClient.put({
            route:'user/profile', 
            data: { firstName:firstname, lastName:lastname }, 
            authentified: true,
        });
        return response;
    }

}

export default UserApi;
