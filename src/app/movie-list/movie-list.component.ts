import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb/tmdb.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService, private route: ActivatedRoute) { }


  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');

    if (type === 'popular') {
      this.loadPopularMovies();
    } else if (type === 'favorites') {
      this.loadFavoriteMovies();
    }
    // ... e assim por diante
  }


  async loadPopularMovies() {
    try {
      this.movies = await this.tmdbService.getMovies('movie/popular', { language: 'en-US', page: 1 });
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  async loadFavoriteMovies() {
    // lógica para carregar filmes favoritos
  }
}
