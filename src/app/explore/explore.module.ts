import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './components/explore/explore.component';
import {GenresModule} from "../genres/genres.module";



@NgModule({
  declarations: [
    ExploreComponent
  ],
    imports: [
        CommonModule,
        GenresModule
    ]
})
export class ExploreModule { }
