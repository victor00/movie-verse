import { Component, EventEmitter, Output } from '@angular/core';
import { TmdbService } from '../services/tmdb/tmdb.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchResults: EventEmitter<any> = new EventEmitter();
  query: string = '';

  constructor(private tmdbService: TmdbService) { }

  async search() {
    if (this.query) {
      try {
        const results = await this.tmdbService.searchMovie(this.query);
        this.searchResults.emit(results);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
