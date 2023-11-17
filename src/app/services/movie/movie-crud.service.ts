import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieCrudService {

  constructor() { }

  addToFavorites(movie: any) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
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
}
