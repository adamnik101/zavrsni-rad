import { Component } from '@angular/core';
import {TrackService} from "../../services/track.service";
import {Track} from "../../../shared/interfaces/track";
import {PagedResponse} from "../../../shared/interfaces/paged-response";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
  currentPage: number = 1;

  pagedResponse : PagedResponse<Track> = {} as PagedResponse<Track>
  constructor(private trackService: TrackService) {
  }
  ngOnInit() {
    this.trackService.getTracks().subscribe(pagedResponse => {
      this.pagedResponse = pagedResponse;
      this.currentPage = pagedResponse.current_page;
    })
  }
}
