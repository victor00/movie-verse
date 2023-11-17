import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { TmdbService } from '../services/tmdb/tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { MovieCrudService } from '../services/movie/movie-crud.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  movies: Movie[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  private categoryLoadFunctions: { [key: string]: (page: number) => Promise<void> } = {
    popular: (page: number) => this.loadPopularMovies(page),
    favorites: (page: number) => this.loadFavoriteMovies(page),
    watchlist: (page: number) => this.loadWatchlistMovies(page),
    trending: (page: number) => this.loadTrendingMovies(page),
    topRated: (page: number) => this.loadTopRatedMovies(page),
  };

  currentCategory: string = '';

  constructor(private tmdbService: TmdbService,
    private route: ActivatedRoute, private router: Router,
    private movieCrudService: MovieCrudService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['category']) {
        this.currentCategory = params['category'];
        this.loadMovies(this.currentCategory);
      }
    });
  }

  ngAfterViewInit(): void {
    this.searchComponent.searchResults.subscribe(results => {
      this.handleSearchResults(results);
    });
  }

  handleSearchResults(results: any) {
    this.movies = results.results;
    this.currentPage = results.page;
    this.totalPages = results.total_pages;
  }

  async loadMovies(category: string, page: number = 1) {
    const loadFunction = this.categoryLoadFunctions[category];

    if (loadFunction) {
      await loadFunction(page);
    } else {
      console.error('Unknown category:', category);
    }
  }

  async loadPopularMovies(page: number) {
    this.genericLoadMovies('movie/popular', page, { language: 'en-US' });
  }

  async loadTrendingMovies(page: number) {
    this.genericLoadMovies('trending/movie/day', page, { language: 'en-US' });
  }

  async loadTopRatedMovies(page: number) {
    this.genericLoadMovies('movie/top_rated', page, { language: 'en-US' });
  }

  async loadFavoriteMovies(page: number) {
    this.movies = this.movieCrudService.getFavorites();
  }

  async loadWatchlistMovies(page: number) {
    this.movies = this.movieCrudService.getWatchlist();
  }

  private async genericLoadMovies(url: string, page: number, queryParams: any = {}) {
    const response = await this.tmdbService.getMovies(url, { page, ...queryParams });
    this.movies = response.results;
    this.currentPage = response.page;
    this.totalPages = response.total_pages;
  }
}
