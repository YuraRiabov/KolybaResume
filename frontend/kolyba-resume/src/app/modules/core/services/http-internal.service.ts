import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({ providedIn: 'root' })
export class HttpInternalService {
    private baseUrl: string = environment.backendUrl;

    private headers = new HttpHeaders();

    // eslint-disable-next-line no-empty-function
    constructor(private http: HttpClient) {}

    public getStringRequest(url: string, httpParams?: any): Observable<string> {
        return this.http.get(this.buildUrl(url), { headers: this.getHeaders(), params: httpParams, responseType: 'text' });
    }

    public getRequest<T>(url: string, httpParams?: any): Observable<T> {
        return this.http.get<T>(this.buildUrl(url), { headers: this.getHeaders(), params: httpParams });
    }

    public postRequest<T>(url: string, payload: object | null, httpParams?: any): Observable<T> {
        return this.http.post<T>(this.buildUrl(url), payload, { headers: this.getHeaders(), params: httpParams });
    }

    public putRequest<T>(url: string, payload: object, httpParams?: any): Observable<T> {
        return this.http.put<T>(this.buildUrl(url), payload, { headers: this.getHeaders(), params: httpParams });
    }

    public deleteRequest<T>(url: string, httpParams?: any): Observable<T> {
        return this.http.delete<T>(this.buildUrl(url), { headers: this.getHeaders(), params: httpParams });
    }

    private getHeaders(): HttpHeaders {
        return this.headers;
    }

    private getHeader(key: string): string {
        return this.headers.get(key) as string;
    }

    private setHeader(key: string, value: string): void {
        this.headers = this.headers.set(key, value);
    }

    private deleteHeader(key: string): void {
        this.headers = this.headers.delete(key);
    }

    private buildUrl(url: string): string {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }

        return this.baseUrl + url;
    }
}
