import { Injectable } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../../shared/interfaces/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService extends ApiService{

  constructor(http: HttpClient) {
    super(http);
  }

  getGenres() : Observable<Genre[]> {
    return this.get<Genre[]>('genres');
  }
  getOne(id: string) : Observable<Genre> {
    return this.get<Genre>(`genres/${id}`)
  }
}
