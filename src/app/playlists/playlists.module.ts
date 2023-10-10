import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { CreatePlaylistDialogComponent } from './components/create-playlist-dialog/create-playlist-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    CreatePlaylistDialogComponent
  ],
  exports: [
    CreatePlaylistDialogComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class PlaylistsModule { }
