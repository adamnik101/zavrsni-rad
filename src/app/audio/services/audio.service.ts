import {Injectable} from '@angular/core';
import {Track} from "../../shared/interfaces/track";

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public audio = new Audio();
  public track: Track = {} as Track
  public isPlayingAudio = false;
  public currentTime : number = 0;
  public audioDuration: number = 0;
  public muted : boolean = false;

  shuffle : boolean = false;
  shuffleIndex : number = 0;
  queue : Track[] = [];
  queueIndex : number = 0;
  //queueCurrentTrack : Track = this.queue[this.queueIndex]

  repeatStates : string[] = ['Off', 'Repeat All', 'Repeat One']
  repeatIndex : number = 0;
  repeatState : string = this.repeatStates[this.repeatIndex];
  constructor() { }
  /*play(track: Track) {
    if(!this.queue.includes(track)){
      this.queue.push(track)
    }
    else if(this.queue.indexOf(track) != this.queueIndex && this.track != track){
      console.log('Pusti sledecu')
    }
    this.queueIndex = this.queue.indexOf(track)
    console.log(track)

    if(!this.isPlaying()) {
      if(this.audio.paused && this.audio.currentTime == 0) {
        this.audio.src = 'assets/tracks/Donkey Kong Country - Aquatic Ambiance Remix [Kamex].mp3'
      }

      this.audio.play()
        .then(() => {
          this.audio.oncanplaythrough = () => {
            this.audioDuration = this.audio.duration * 1000;
            this.audio.ontimeupdate = () => {
              this.currentTime = this.audio.currentTime * 1000;
            }
            this.audio.onended = () => {
              if(this.repeatState == 'Repeat One') {
                this.play(track)
              }
              else if(this.repeatState == 'Repeat All') {
                this.play(track)
              }
              else{
                this.isPlayingAudio = false;
              }
            }
          }
        })
      console.log("ovde si")
      this.isPlayingAudio = true;
      this.track = this.queue[this.queueIndex];
    }
    else if(track == this.queue[this.queueIndex]){
      console.log('track == queue track')
      this.track = this.queue[this.queueIndex]
    }
    else{
      console.log('Usao si u pauziranje..')
      this.audio.pause();
      this.isPlayingAudio = false;
    }

    console.log("Queue: ",this.queue)
    console.log("Queue index: ",this.queueIndex)
  }*/

  play(track: Track) {
    if(!this.queue.includes(track)) {
      this.queue.push(track);
      this.queueIndex = this.queue.indexOf(track);
      this.track = this.queue[this.queueIndex]
      console.log('Added a new track to queue..')
      this.audio.src = track.path;
    }
    else if(this.queue.includes(track)) {
      if(this.shuffle) {
        let randomIndex = Math.floor(Math.random() * (this.queue.length))
        if(this.queue[randomIndex] == this.queue[this.queueIndex]){
          console.log('shuffled track is the same as the one playing..')
          console.log(this.queue[randomIndex].title, this.queue[this.queueIndex].title)
        }
        else{
          this.shuffleIndex = randomIndex;
          this.track = this.queue[randomIndex];
          console.log('shuffled track is another one in queue..')
          console.log(this.queue[randomIndex].title, this.queue[this.queueIndex].title)
        }
      }
      if(track != this.track){
        console.log('Its a different track, so need a new audio..')
        this.audio.src = track.path;
        this.track = track
        this.queueIndex = this.queue.indexOf(track)
      }
      else{
        console.log('Same track, no need for a new audio!')
        this.track = track
      }
    }

    this.audio.play()
      .then(() => {
        console.log('Playing audio..')
        this.isPlayingAudio = true;
        this.audio.oncanplaythrough = () => {
          this.audioDuration = this.audio.duration * 1000;
          this.audio.ontimeupdate = () => {
            this.currentTime = this.audio.currentTime * 1000;
          }
          this.audio.onended = () => {
            if(this.repeatState == 'Repeat One') {
              this.play(track)
            }
            else if(this.repeatState == 'Repeat All') {
              let nextIndex = this.queueIndex + 1;
              if(this.shuffle){
                this.track = this.queue[this.shuffleIndex]
                this.play(this.queue[this.shuffleIndex])
              }
              else{
                if(this.queue.length == nextIndex) {
                  this.queueIndex = 0;
                  console.log('last and start from 0')
                }
                else{
                  console.log('start the next one')
                  this.queueIndex++
                }
                console.log('Track to play next: ', this.queue[this.queueIndex])
                this.play(this.queue[this.queueIndex])
              }
            }
            else{
              this.isPlayingAudio = false;
            }
          }
        }
      })
  }
  isPlaying () : boolean {
    return this.audio.currentTime > 0 && !this.audio.ended && !this.audio.paused && this.audio.readyState > 2
  }

  seekToTime(newTime: number) {
    this.audio.currentTime = newTime / 1000;
  }

  addToQueue(track: Track) {
    if(!this.queue.includes(track)){
      this.queue.push(track);
    }
  }
  removeTrackFromQueue(track: Track) {
    let indexToRemove = this.queue.indexOf(track);

    this.queue.splice(indexToRemove, 1)
  }
}
