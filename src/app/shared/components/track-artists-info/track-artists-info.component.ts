import {Component, Input} from '@angular/core';
import {Artist} from "../../interfaces/artist";

@Component({
  selector: 'app-track-artists-info',
  templateUrl: './track-artists-info.component.html',
  styleUrls: ['./track-artists-info.component.scss']
})
export class TrackArtistsInfoComponent {
  @Input('owner') owner: Artist = {} as Artist
  @Input('features') features: Artist[] = {} as Artist[]
}
