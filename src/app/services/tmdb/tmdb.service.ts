import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from 'src/environments/environment';

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
}
