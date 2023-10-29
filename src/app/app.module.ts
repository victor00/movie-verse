import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { PopularComponent } from './popular/popular.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WatchlistComponent } from './watchlist/watchlist.component'

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    NavbarComponent,
    FooterComponent,
    PopularComponent,
    MoviesComponent,
    FavoritesComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
