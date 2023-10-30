import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'movies/:category',
    component: MovieListComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent },
    ]
  },
  { path: '', redirectTo: 'movies/popular', pathMatch: 'full' }, // redirect to popular as default
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
