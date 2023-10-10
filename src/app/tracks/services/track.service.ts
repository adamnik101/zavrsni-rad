import { Injectable } from '@angular/core';
import {Track} from "../../shared/interfaces/track";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PagedResponse} from "../../shared/interfaces/paged-response";
import {ApiService} from "../../core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class TrackService extends ApiService{
  tracks : Track[] = []
  constructor(http: HttpClient) {
    super(http)
  }

  getTracks() : Observable<PagedResponse<Track>> {
    return this.get<PagedResponse<Track>>('tracks');
  }
}
