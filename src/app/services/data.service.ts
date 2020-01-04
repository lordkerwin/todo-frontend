import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {


    constructor(private http: HttpClient) {
    }

    get(path: string): Observable<any> {
        return this.http.get(environment.backend + path);
    }

    post(path: string, body?): Observable<any> {
        // return this.request;
        return this.http.post(environment.backend + path, body);
    }

    patch(path: string, body?): Observable<any> {
        // return this.request;
        return this.http.patch(environment.backend + path, body);
    }

    put(path: string, body?): Observable<any> {
        // return this.request;
        return this.http.put(environment.backend + path, body);
    }

    delete(path: string): Observable<any> {
        // return this.request;
        return this.http.delete(environment.backend + path);
    }


}
