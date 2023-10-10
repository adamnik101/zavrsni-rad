import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import {RouterLink} from "@angular/router";
import { GenreDetailComponent } from './components/genre-detail/genre-detail.component';
import {GenreRoutingModule} from "./genre-routing.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {SharedModule} from "../shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
    declarations: [
        GenreCardComponent,
        GenreDetailComponent
    ],
    exports: [
        GenreCardComponent
    ],
    imports: [
        GenreRoutingModule,
        CommonModule,
        RouterLink,
        NgOptimizedImage,
        MatTooltipModule,
        MatButtonModule,
        MatMenuModule,
        SharedModule,
        MatDividerModule
    ]
})
export class GenresModule { }
