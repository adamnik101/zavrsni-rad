import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {SidenavModule} from "./sidenav/sidenav.module";
import {TopnavModule} from "./topnav/topnav.module";
import {ExploreModule} from "./explore/explore.module";
import {AlbumsModule} from "./albums/albums.module";
import {TracksModule} from "./tracks/tracks.module";
import { NotFoundComponent } from './not-found/not-found.component';
import {NgOptimizedImage} from "@angular/common";
import {PlayerModule} from "./player/player.module";
import {ArtistsModule} from "./artists/artists.module";
import {QueueListModule} from "./queue-list/queue-list.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PlaylistsModule} from "./playlists/playlists.module";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    SidenavModule,
    TopnavModule,
    ExploreModule,
    AlbumsModule,
    ArtistsModule,
    TracksModule,
    NgOptimizedImage,
    PlayerModule,
    PlaylistsModule,
    QueueListModule,
    DragDropModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
