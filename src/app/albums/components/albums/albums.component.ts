import { Component } from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {PagedResponse} from "../../../shared/interfaces/paged-response";
import {Album} from "../../../shared/interfaces/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  albumsPagedResponse : PagedResponse<Album> = {} as PagedResponse<Album>
  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(pagedResponse => {
      this.albumsPagedResponse = pagedResponse
      console.log(pagedResponse.data)
    });
  }
}
