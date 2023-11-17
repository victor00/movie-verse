import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() updateFavorites = new EventEmitter<Movie>();
  @Output() updateWatchlist = new EventEmitter<Movie>();

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
    return this.movieCrudService.isInFavorites(movie);
  }

  isInWatchlist(movie: Movie): boolean {
   return this.movieCrudService.isInWatchlist(movie);
  }

  toggleFavorites(movie: Movie) {
    this.updateFavorites.emit(movie);
  }

  toggleWatchlist(movie: Movie) {
    this.updateWatchlist.emit(movie);
  }
}
