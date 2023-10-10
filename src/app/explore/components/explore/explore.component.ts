import { Component } from '@angular/core';
import {Genre} from "../../../shared/interfaces/genre";
import {GenreService} from "../../../genres/services/genre.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  genres : Genre[] = []
  constructor(private genreService: GenreService) {
  }
  ngOnInit() {
    this.getGenres();
  }
  getGenres() {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
      console.log(this.genres)
    })
  }
}
