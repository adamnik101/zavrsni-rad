import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AudioService} from "../../../audio/services/audio.service";
import {formatDate} from "@angular/common";
import {style} from "@angular/animations";
import {Track} from "../../../shared/interfaces/track";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent{
  sliderIsBeingDragged : boolean = false;
  queueWindowIsOpened: boolean = false;
  volumeValueBeforeMute : number = 1.0;
  @ViewChild('slider', {static: true}) slider! : ElementRef;
  @ViewChild('volume', {static: true}) volume! : ElementRef;
  constructor(public audioService: AudioService) {
    this.audioService.audio.addEventListener('timeupdate', () => {
      this.setRangeProgress()
      this.setVolumeProgress()
    })
  }
  repeatToggle() {
    const audio = this.audioService;
    audio.repeatIndex = (audio.repeatIndex + 1) % audio.repeatStates.length;
    audio.repeatState = audio.repeatStates[audio.repeatIndex];

    console.log(audio.repeatState)
  }
  setRangeProgress() {
    console.log('range progress')
    this.slider.nativeElement.style.backgroundSize = (this.slider.nativeElement.value - this.slider.nativeElement.min) * 100 / (this.slider.nativeElement.max - this.slider.nativeElement.min) + '% 100%';
  }
  setVolumeProgress() {
    this.volume.nativeElement.style.backgroundSize = (this.volume.nativeElement.value - this.volume.nativeElement.min) * 100 / (this.volume.nativeElement.max - this.volume.nativeElement.min) + '% 100%';
  }
  Mute(){
    this.volumeValueBeforeMute = this.audioService.audio.volume;
    this.audioService.muted = !this.audioService.muted;
    this.audioService.audio.volume = 0.0;
  }
  Unmute() {
    this.audioService.muted = !this.audioService.muted;
    this.audioService.audio.volume = this.volumeValueBeforeMute;
  }
  seekToTime(newTime: number) {
    this.audioService.seekToTime(newTime);
  }
  next() {
    const audio = this.audioService;
    const nextIndex = audio.queueIndex + 1;

    if(audio.queue.length == nextIndex) {
      audio.queueIndex = 0;
      console.log('last and start from 0')
    }
    else{
      console.log('start the next one')
      audio.queueIndex++
    }
    console.log('Track to play next: ', audio.queue[audio.queueIndex])
    audio.play(audio.queue[audio.queueIndex])
  }
  previous() {
    const audio = this.audioService;
    const previousIndex = audio.queueIndex - 1;

    if(previousIndex == -1) {
      audio.queueIndex = audio.queue.length - 1;
      console.log('first and start from last')
    }
    else{
      console.log('start the previous one')
      audio.queueIndex--
    }
    console.log('Track to play next: ', audio.queue[audio.queueIndex])
    audio.play(audio.queue[audio.queueIndex])
  }
  onSliderMouseDown () {
    console.log('mouse is down...')
    this.sliderIsBeingDragged = true;
  }
  onSliderMouseUp () {
    console.log('mouse is released..')
    this.sliderIsBeingDragged = false;
    this.audioService.currentTime = this.slider.nativeElement.value
  }
  pause() {
    this.audioService.audio.pause()
    this.audioService.isPlayingAudio = false;
  }
  continue() {
    this.audioService.audio.play();
    this.audioService.isPlayingAudio = true;
  }
  toggleQueueWindow() {
    this.queueWindowIsOpened = !this.queueWindowIsOpened;
  }
  toggleShuffle() {
    this.audioService.shuffle = !this.audioService.shuffle;
  }
  protected readonly Number = Number;

}
