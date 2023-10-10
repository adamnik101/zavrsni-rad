import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Track} from "../../../shared/interfaces/track";
import {AudioService} from "../../../audio/services/audio.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent {
  public queue : Track[] = []
  @Input() queueWindow: any;
  @Output() queueWindowChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public audioService: AudioService) {
    this.queue = audioService.queue
  }

  drop(event: CdkDragDrop<Track>) {
    moveItemInArray(this.queue, event.previousIndex, event.currentIndex);
    this.audioService.queueIndex = event.currentIndex
  }
  closeQueueWindow() {
    this.queueWindow = !this.queueWindow;
    this.queueWindowChange.emit(this.queueWindow)
  }
}
