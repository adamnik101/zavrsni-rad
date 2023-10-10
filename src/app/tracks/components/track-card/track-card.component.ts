import {Component, Input} from '@angular/core';
import {Track} from "../../../shared/interfaces/track";

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent {
  @Input() track : Track = {} as Track;
}
