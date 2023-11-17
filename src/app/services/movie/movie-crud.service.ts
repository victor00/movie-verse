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

  addToWatchlist(movie: any) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  getWatchlist() {
    return JSON.parse(localStorage.getItem('watchlist') || '[]');
  }
}
