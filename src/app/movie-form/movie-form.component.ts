import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MovieCrudService } from 'src/app/services/movie/movie-crud.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm!: FormGroup;
  movies: any[] = [];  // Array to store movies

  constructor(private fb: FormBuilder, private movieCrudService: MovieCrudService) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      release_date: ['', [Validators.required, Validators.pattern(/your-regex-here/)]],
      // ... other fields
    });

    this.loadMovies(); // Load movies when component initializes
  }

  onSubmit() {
    if (this.movieForm.valid) {
      this.movieCrudService.addToFavorites(this.movieForm.value); // Save movie
      this.loadMovies(); // Reload movies to update the list
      this.movieForm.reset(); // Optional: Reset form after submission
    }
  }

  loadMovies() {
    this.movies = this.movieCrudService.getFavorites(); // Fetch movies from service
  }
}
