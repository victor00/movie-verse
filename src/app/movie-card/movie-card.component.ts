import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieCrudService } from 'src/app/services/movie/movie-crud.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private movieCrudService: MovieCrudService) { }


  formatBrazilianDate(date: string): string {
    const newDate = new Date(date);
    const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });
    const formattedDate = formatter.format(newDate);

    return formattedDate;
  }

  formatStarAverageValue(value: number): number {
    return Math.round(value * 10) / 10;
  }


  addMovieToFavorites(movie: any) {
    this.movieCrudService.addToFavorites(movie);
  }

  addMovieToWatchlist(movie: any) {
    this.movieCrudService.addToWatchlist(movie);
  }
}
