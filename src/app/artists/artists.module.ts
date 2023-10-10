import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import {ArtistDetailComponent} from "./components/artist-detail/artist-detail.component";
import {ArtistsComponent} from "./components/artists/artists.component";
import {SharedModule} from "../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    ArtistDetailComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    SharedModule,
    MatListModule,
    NgOptimizedImage,
    MatTooltipModule
  ]
})
export class ArtistsModule { }
