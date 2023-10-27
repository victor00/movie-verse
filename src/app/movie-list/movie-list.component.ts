import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/model/movie.model';
import axios from 'axios';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: Movie[] = [];


  async ngOnInit() {
    try {
      const response = await axios.get(`${environment.baseApiUrl}movie/popular?language=en-US&page=1`, {
        params: {
          api_key: environment.tmdbApiKey,
        }
      });
      this.movies = response.data.results;
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
}
