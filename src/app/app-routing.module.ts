import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies/popular', component: MovieListComponent },
  { path: 'movies/favorites', component: MovieListComponent },
  { path: '', redirectTo: '/popular', pathMatch: 'full' } // redirect to popular as default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
