import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TrackRowComponent } from './components/track-row/track-row.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import { DividerComponent } from './components/divider/divider.component';
import { FeaturesComponent } from './components/features/features.component';
import { TrackArtistsInfoComponent } from './components/track-artists-info/track-artists-info.component';



@NgModule({
    declarations: [
        TrackRowComponent,
        DividerComponent,
        FeaturesComponent,
        TrackArtistsInfoComponent
    ],
  exports: [
    TrackRowComponent,
    DividerComponent,
    FeaturesComponent,
    TrackArtistsInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    NgOptimizedImage,
    RouterLink
  ]
})
export class SharedModule { }
