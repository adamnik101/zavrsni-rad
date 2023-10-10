import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Track} from "./shared/interfaces/track";
import {PagedResponse} from "./shared/interfaces/paged-response";
import {Observable} from "rxjs";
import {Genre} from "./shared/interfaces/genre";
import {BackgroundColorService} from "./shared/services/background-color.service";
import {AudioService} from "./audio/services/audio.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular.Client';

  constructor(private httpClient: HttpClient,
              private colorService: BackgroundColorService,
              public audioService: AudioService) {
  }

  login(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };

    let response =  this.httpClient.post('http://127.0.0.1:8000/api/auth/login', '{"email" : "adam@gmail.com",\n' +
      '   "password" : "26axn5QX@"}', options);
    response.subscribe((data) => {
      console.log(data)
      localStorage.setItem('token', JSON.stringify(data))
    })
  }
}
