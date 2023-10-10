import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import {FormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {QueueListModule} from "../queue-list/queue-list.module";
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        PlayerComponent
    ],
    exports: [
        PlayerComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    QueueListModule,
    RouterLink,
    SharedModule
  ]
})
export class PlayerModule { }
