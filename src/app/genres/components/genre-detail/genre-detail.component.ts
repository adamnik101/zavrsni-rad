import {Component, Renderer2, ViewEncapsulation} from '@angular/core';
import {Genre} from "../../../shared/interfaces/genre";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {GenreService} from "../../services/genre.service";
import {AudioService} from "../../../audio/services/audio.service";
import {Track} from "../../../shared/interfaces/track";

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.scss']
})
export class GenreDetailComponent {

  genre: Genre = {} as Genre

  constructor(private route: ActivatedRoute,
              private genreService: GenreService,
              public audioService: AudioService,
              private router: Router,
              private renderer: Renderer2) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id != null) {
        this.genreService.getOne(id).subscribe({
          next: (genre) => {
            this.genre = genre;
            console.log(genre)
            console.log(genre.hex_color)
            document.documentElement.style.setProperty('--genre-background', genre.hex_color);
          },
          error: () => {
            return this.router.navigate(['/not-found'], {skipLocationChange : true});
          }
        });
      }
    })
  }

  ngOnDestroy() {
    document.documentElement.style.setProperty('--genre-background', '#171719');
  }
}
