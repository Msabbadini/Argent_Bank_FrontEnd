export interface HttpProps{
    route: string;
    data?: object;
    headers?: {Authorization: string, [key:string]:string},
    authentified?: boolean
}

interface Options extends RequestInit {
    method ?: string,
    headers ?: HeadersInit,
    body ?: BodyInit
}

interface HttpClientProps {
    path: string,
    method ?: string,
    headers ?: {Authorization: string, [key:string]:string},
    body ?: object|string
    authentified?: boolean
}

class HttpClient {
    private _host: string;
    private _auth = "";

    constructor(host:string) {
        this._host = host;
    }

    set auth(token:string) {
        this._auth = token;
    }

    get host():string {
        return this._host;
    }

    private fetch ({ method, path, headers, body, authentified }:HttpClientProps) {
        const options:Options = {
            method: method ?? 'GET',
            headers: undefined
        }
        if (authentified && this._auth) {
            headers = {
                ...headers,
                Authorization: `Bearer ${this._auth}`,
            }
        }

        const h = new Headers();
        if (headers) {
            for (const key of Object.keys(headers)) {
                if (key === 'authorization' || key === 'Authorization') {
                    h.append("Authorization", (!headers[key].startsWith("Bearer") ? "Bearer " : "")+headers[key])
                } else {
                    h.append(key, headers[key]);
                }
            }
        }
        if (body && typeof body === 'object') {
            h.append('content-type', 'application/json');
        }

        options.headers = h;

        if (body) {
            options.body = JSON.stringify(body);
        }

        return fetch(`${this.host}${path}`, options);
    }

    async post({route, data, headers, authentified}:HttpProps) {
        return (await (this.fetch({ method: 'POST', path:route, headers, body: data, authentified })
        .then(res=>res.json())));
    }

    async get({route, data, headers, authentified}:HttpProps) {
        return (await (this.fetch({ method: 'POST', path:route, headers, body: data, authentified })
        .then(res=>res.json())));
    }

    async put({route, data, headers, authentified}:HttpProps) {
        return (await (this.fetch({ method: 'PUT', path:route, headers, body: data, authentified })
        .then(res=>res.json())));
    }
}

export default HttpClient;