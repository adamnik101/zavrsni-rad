import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {TracksComponent} from "./tracks/components/tracks/tracks.component";
import {AlbumsComponent} from "./albums/components/albums/albums.component";
import {ExploreComponent} from "./explore/components/explore/explore.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path : 'login', component: LoginComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'artists', loadChildren: () => import('./artists/artists.module').then(module => module.ArtistsModule)},
  { path: 'albums', component: AlbumsComponent },
  { path: 'explore', component: ExploreComponent},
  { path: 'genres', loadChildren: () => import('./genres/genres.module').then(module => module.GenresModule)},
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
