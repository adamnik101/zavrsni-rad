import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { QueueListComponent } from './components/queue-list/queue-list.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    QueueListComponent
  ],
  exports: [
    QueueListComponent
  ],
    imports: [
        CommonModule,
        DragDropModule,
        RouterLink,
        MatButtonModule,
        NgOptimizedImage,
        SharedModule
    ]
})
export class QueueListModule { }
