import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { TmdbService } from '../services/tmdb/tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];


  constructor(private tmdbService: TmdbService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Params:', params);
      const category = params['category'];
      this.loadMovies(category);
    });

  }

  async loadMovies(category: string) {

    console.log(category)
    switch (category) {
      case 'popular':
        await this.loadPopularMovies();
        break;
      case 'favorites':
        await this.loadFavoriteMovies();
        break;
      // ...
      default:
        console.error('Unknown category:', category);
    }
  }


  async loadPopularMovies() {
    this.genericLoadMovies('movie/popular', { language: 'en-US', page: 1 });
  }

  async loadFavoriteMovies() {
    // lógica para carregar filmes favoritos
  }


  private async genericLoadMovies(url: string, queryParams: any = {}) {
    this.movies = await this.tmdbService.getMovies(url, queryParams);
  }
}
