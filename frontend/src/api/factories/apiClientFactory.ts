import { ApiClient } from '../clients';
import { Headers } from '../types';

export class ApiClientFactory {
    private readonly baseURL: string;
    private readonly headers: Headers;

    public constructor(baseURL: string, headers: Headers = {}) {
        this.baseURL = baseURL;
        this.headers = headers;
    }

    public createClient(): ApiClient {
        return new ApiClient(this.baseURL, this.headers);
    }

    public createAuthorizedClient(authToken: string): ApiClient {
        return new ApiClient(this.baseURL, this.headers, authToken);
    }
}
