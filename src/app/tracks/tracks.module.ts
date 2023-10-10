import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksComponent } from './components/tracks/tracks.component';
import { TrackCardComponent } from './components/track-card/track-card.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    TracksComponent,
    TrackCardComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class TracksModule { }
