import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrudService } from 'src/app/services/movie/movie-crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private movieCrudService: MovieCrudService, private router: Router,
    private route: ActivatedRoute) { }

  formatBrazilianDate(date: string): string {
    const newDate = new Date(date);
    const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });
    const formattedDate = formatter.format(newDate);

    return formattedDate;
  }

  formatStarAverageValue(value: number): number {
    return Math.round(value * 10) / 10;
  }


  isInFavorites(movie: Movie): boolean {
    const favorites = this.movieCrudService.getFavorites();
    return favorites.some((favMovie: Movie) => favMovie.id === movie.id);
  }

  isInWatchlist(movie: Movie): boolean {
    const watchlist = this.movieCrudService.getWatchlist();
    return watchlist.some((watchMovie: Movie) => watchMovie.id === movie.id);
  }

  toggleFavorites(movie: Movie) {
    if (this.isInFavorites(movie)) {
      this.movieCrudService.removeFromFavorites(movie);
    } else {
      this.movieCrudService.addToFavorites(movie);
    }
  }

  toggleWatchlist(movie: Movie) {
    if (this.isInWatchlist(movie)) {
      this.movieCrudService.removeFromWatchlist(movie);
    } else {
      this.movieCrudService.addToWatchlist(movie);
    }
  }
}
