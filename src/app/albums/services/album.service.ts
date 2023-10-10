import { Injectable } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PagedResponse} from "../../shared/interfaces/paged-response";
import {Album} from "../../shared/interfaces/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends ApiService{

  constructor(http: HttpClient)
  {
    super(http)
  }

  getAlbums() : Observable<PagedResponse<Album>> {
    return this.get<PagedResponse<Album>>('albums');
  }
}
