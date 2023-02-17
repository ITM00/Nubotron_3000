import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { Forbidden, HttpError, Unauthorized } from '../errors';
import { Headers, IApiClient } from '../types';

export class ApiClient implements IApiClient {
    private readonly baseURL: string;
    private readonly headers: Headers;
    private readonly authToken: string;

    public constructor(baseURL: string, headers: Headers, authToken = "") {
        this.baseURL = baseURL;
        this.headers = headers;
        this.authToken = authToken;
    }

    public async get(endpoint = '', params?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient(params);
            const response = await client.get(endpoint, { signal });
            return response.data;
        } catch (error: any) {
            this.handleError(error);
        }
    }

    public async post(endpoint = '', data?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, data, { signal });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    public async uploadFile(endpoint = '', formData: FormData): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: this.baseURL,
            headers: this.headers,
            params: params,
        };
        if (this.authToken && config.headers) {
            config.headers.Authorization = `Bearer ${this.authToken}`;
        }
        return axios.create(config);
    }

    private handleError(error: any): never {
        if (!error.response) {
            throw new HttpError(error.message);
        } else if (error.response.status === 401) {
            throw new Unauthorized(error.response.data);
        } else if (error.response.status === 403) {
            throw new Forbidden(error.response.data);
        } else {
            throw error;
        }
    }
}
