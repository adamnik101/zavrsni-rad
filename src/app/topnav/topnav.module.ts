import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        TopnavComponent
    ],
    exports: [
        TopnavComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class TopnavModule { }
