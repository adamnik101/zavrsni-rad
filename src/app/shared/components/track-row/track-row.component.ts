import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Track} from "../../interfaces/track";
import {AudioService} from "../../../audio/services/audio.service";

@Component({
  selector: 'app-track-row',
  templateUrl: './track-row.component.html',
  styleUrls: ['./track-row.component.scss']
})
export class TrackRowComponent {
    @Input('track') track: Track = {} as Track
    @Input('index') index: number = 1
    @ViewChild('row') rowElement!: ElementRef;
    constructor(public audioService: AudioService) {
    }

  play (track: Track) {
    this.audioService.play(track);
  }
  pause() {
    this.audioService.audio.pause();
    this.audioService.isPlayingAudio = false;
  }
  addToQueue(track: Track) {
    this.audioService.addToQueue(track);
  }
  stayFocused() {
    this.rowElement.nativeElement.classList.add('focused')
  }
  onMenuClosed(){
      this.rowElement.nativeElement.classList.remove('focused')
  }
  isInQueue() {
      return this.audioService.queue.includes(this.track)
  }
  removeTrackFromQueue(track: Track) {
    this.audioService.removeTrackFromQueue(track)
  }
}
