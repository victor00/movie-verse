import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopularComponent } from './popular/popular.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: 'popular', component: PopularComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: '', redirectTo: '/popular', pathMatch: 'full' } // redirect to popular as default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
