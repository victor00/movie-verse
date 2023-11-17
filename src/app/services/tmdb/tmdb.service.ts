import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor() { }

  async getMovies(endpoint: string, queryParams: any = {}) {
    try {
      const response = await axios.get(`${environment.baseApiUrl}${endpoint}`, {
        params: {
          ...queryParams,
          api_key: environment.tmdbApiKey,
        }
      });
      return response.data;
    } catch (error) {
      console.error("API tmdb error: " + error)
      throw error;
    }
  }

  async getMovie(movieId: number) {
    try {
      const response = await axios.get(`${environment.baseApiUrl}movie/${movieId}`, {
        params: {
          api_key: environment.tmdbApiKey,
          language: 'en-US'
        }
      });
      return response.data;
    } catch (error) {
      console.error("API tmdb error: " + error);
      throw error;
    }
  }

  async searchMovie(query: string, page: number = 1) {
    try {
      const response = await axios.get(`${environment.baseApiUrl}search/movie`, {
        params: {
          query,
          page,
          api_key: environment.tmdbApiKey,
          language: 'en-US',
          include_adult: false
        }
      });
      return response.data;
    } catch (error) {
      console.error("API tmdb error: " + error);
      throw error;
    }
  }
}
