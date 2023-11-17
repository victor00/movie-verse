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
  movies: any[] = [];
  submitted = false;

  constructor(private fb: FormBuilder, private movieCrudService: MovieCrudService) { }


  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      release_date: ['', Validators.required],
      vote_average: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });

    this.loadMovies();
  }

  onSubmit() {
    if (this.movieForm.valid) {
      this.movieCrudService.addToFormMovies(this.movieForm.value);
      this.loadMovies();
      this.movieForm.reset();
      this.submitted = true; // Set to true on submission
      setTimeout(() => this.submitted = false, 3000); // Reset after 3 seconds
    }
  }

  loadMovies() {
    this.movies = this.movieCrudService.getFormMovies();
  }

  removeMovie(movie: any) {
    if (confirm('Tem certeza que quer deletar esse filme?')) {
      this.movieCrudService.removeFromFormMovies(movie);
      this.loadMovies();
    }
  }
}
