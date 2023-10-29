import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  @Input() movie!: Movie;

  formatBrazilianDate(date: string): string {
    const newDate = new Date(date);
    const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });
    const formattedDate = formatter.format(newDate);

    return formattedDate;
  }

  formatStarAverageValue(value: number): number {
    return Math.round(value * 10) / 10;
  }
}
