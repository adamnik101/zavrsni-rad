import { Component } from '@angular/core';
import {PagedResponse} from "../../../shared/interfaces/paged-response";
import {Artist} from "../../../shared/interfaces/artist";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
  artistsPagedResponse: PagedResponse<Artist> = {} as PagedResponse<Artist>

  constructor(private artistService: ArtistService) {
  }
  ngOnInit() {
    this.artistService.getArtists().subscribe(pagedResponse => {
      this.artistsPagedResponse = pagedResponse;
      console.log(pagedResponse)
    })
  }
}
