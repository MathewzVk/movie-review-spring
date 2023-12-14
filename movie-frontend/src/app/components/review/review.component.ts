import { Component, OnInit } from '@angular/core';
import { HttpService, PostReviewRequest } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent  implements OnInit {

  review = new FormControl('', Validators.required);

  constructor(public movieService: MovieService, private route: ActivatedRoute, public sanitizer: DomSanitizer, private http: HttpService){}


  ngOnInit(): void {

    if (this.movieService.movies()?.length === 0) {
      this.movieService.getMovies();
    }


    const imdbId = this.route.snapshot.paramMap.get('imdbId');
    if (imdbId) {
      this.movieService.imdbId.set(imdbId);
    }
  }

  onSubmitReview() {
    if (this.review.invalid) {
      return;
    }
    const review: PostReviewRequest = {
      imdbId: this.movieService.selectedMovie()?.imdbId!,
      reviewBody: this.review.value!,
    };
    this.http
      .postReview(review)
      .pipe(
        switchMap(() => {
          return this.http.getMovies();
        })
      )
      .subscribe((movies) => {
        this.movieService.movies.set(movies);
      });
  }

}
