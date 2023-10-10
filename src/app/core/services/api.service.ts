import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'http://localhost:8000/api/';
  constructor(protected http: HttpClient) { }
  protected get<T>(endpoint: string) : Observable<T> {
    const url = this.apiUrl + endpoint;
    return this.http.get<T>(url);
  }
  protected post<T>(endpoint: string, data : T) {
    const url = this.apiUrl + endpoint;
    return this.http.post(url, data);
  }
}
