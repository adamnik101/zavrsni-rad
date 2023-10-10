import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PagedResponse} from "../../shared/interfaces/paged-response";
import {Track} from "../../shared/interfaces/track";
import {Artist} from "../../shared/interfaces/artist";
import {ApiService} from "../../core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends ApiService{

  constructor(http: HttpClient)
  {
    super(http)
  }

  getArtists() : Observable<PagedResponse<Artist>> {
    return this.get<PagedResponse<Artist>>('artists');
  }

  getOne(id: string) :Observable<Artist> {
    return this.get<Artist>('artists/' + id);
  }
}
