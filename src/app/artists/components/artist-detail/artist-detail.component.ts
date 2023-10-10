import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ArtistService} from "../../services/artist.service";
import {Artist} from "../../../shared/interfaces/artist";
import {AudioService} from "../../../audio/services/audio.service";
import {Track} from "../../../shared/interfaces/track";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent {
  artist: Artist = {} as Artist
  constructor(private route: ActivatedRoute,
              private artistService: ArtistService,
              private audioService: AudioService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.has('id')){
        const id = params.get('id')
        if(id != null) {
            this.artistService.getOne(id).subscribe(
              {
                next: (artist) => {
                  this.artist = artist
                  console.log(artist)
                }
              }
            )
        }

      }

    })
  }

  playAllArtistTracks (tracks: Track[]) {

    for (let track of tracks) {
      this.audioService.addToQueue(track)
    }
  }
}
