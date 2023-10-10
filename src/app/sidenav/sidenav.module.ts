import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {RouterLink} from "@angular/router";
import {PlaylistsModule} from "../playlists/playlists.module";



@NgModule({
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SidenavModule { }
