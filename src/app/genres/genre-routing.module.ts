import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenreDetailComponent } from "./components/genre-detail/genre-detail.component";

const routes : Routes = [
  { path: ':id', component: GenreDetailComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GenreRoutingModule {}
