export interface IApiClient {
    get(endpoint: string, params?: URLSearchParams, signal?: AbortSignal): Promise<Response>;

    post(endpoint: string, data?: object, signal?: AbortSignal): Promise<Response>;

    uploadFile(endpoint: string, formData: FormData): Promise<Response>;
}
