import { Injectable, Signal, computed, signal } from '@angular/core';
import { Movie, Review } from '../models/movie';
import { HttpService } from './http.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies = signal<Movie[]>([]);

  imdbId = signal<string>('');

  constructor(private http: HttpService, private sanitizer: DomSanitizer) {}

  public getMovies() {
    this.http.getMovies().subscribe((data) => {
      this.movies.set(data);
    });
  }

  selectedMovie: Signal<Movie | null> = computed(() => {
    const selectedMovie = this.movies().find(
      (movie) => movie.imdbId === this.imdbId()
    );
    if (selectedMovie) {
      return selectedMovie;
    }
    return null;
  });

  getVideoId(url: string) {
    return url.substring(url.indexOf('?v=') + 3);
  }

  embedTrailerLink = computed(() => {
    if (this.selectedMovie()) {
      const videoId = this.getVideoId(this.selectedMovie()!?.trailerLink);

      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0`
      );
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  });


  reviewsForSelectedMovie: Signal<Review[] | null> = computed(() => {
    const tempMovie = this.movies().find(
      (movie) => movie.imdbId === this.selectedMovie()!?.imdbId
    );
    if (tempMovie) {
      return tempMovie.reviewIds;
    }
    return null;
  });

}
