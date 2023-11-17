import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieCrudService {

  private jsonApiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  // Atividade 11
  addToMovies(movie: any): Observable<any> {
    return this.http.post<any>(this.jsonApiUrl, movie);
  }

  // Remover um filme do JSON Server
  removeFromMovies(movieId: number): Observable<void> {
    const url = `${this.jsonApiUrl}/${movieId}`;
    return this.http.delete<void>(url);
  }

  // Consultar todos os filmes no JSON Server
  getAllMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonApiUrl);
  }


  // Atividades antigas
  addToFavorites(movie: any) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    movie.id = this.getNextId();
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFromFavorites(movie: any) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((favMovie: any) => favMovie.id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  addToWatchlist(movie: any) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    movie.id = this.getNextId();
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  removeFromWatchlist(movie: any) {
    let watchlist = this.getWatchlist();
    watchlist = watchlist.filter((watchMovie: any) => watchMovie.id !== movie.id);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  getWatchlist() {
    return JSON.parse(localStorage.getItem('watchlist') || '[]');
  }

  isInFavorites(movie: any): boolean {
    const favorites = this.getFavorites();
    return favorites.some((favMovie: any) => favMovie.id === movie.id);
  }

  isInWatchlist(movie: any): boolean {
    const watchlist = this.getWatchlist();
    return watchlist.some((watchMovie: any) => watchMovie.id === movie.id);
  }

  addToFormMovies(movie: any) {
    let formMovies = JSON.parse(localStorage.getItem('formMovies') || '[]');
    movie.id = this.getNextId();
    formMovies.push(movie);
    localStorage.setItem('formMovies', JSON.stringify(formMovies));
  }

  getFormMovies() {
    return JSON.parse(localStorage.getItem('formMovies') || '[]');
  }

  removeFromFormMovies(movie: any) {
    let formMovies = this.getFormMovies();
    formMovies = formMovies.filter((formMovie: any) => formMovie.id !== movie.id);
    localStorage.setItem('formMovies', JSON.stringify(formMovies));
  }

  private getNextId(): number {
    // Get the highest ID from all lists
    let highestId = Math.max(
      ...this.getFavorites().map((movie: Movie) => movie.id || 0),
      ...this.getWatchlist().map((movie: Movie) => movie.id || 0),
      ...this.getFormMovies().map((movie: Movie) => movie.id || 0)
    );

    // Return the next ID
    return highestId + 1;
  }
}
