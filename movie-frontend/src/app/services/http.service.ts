import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8080/api/v1/movies";
  reviewUrl = 'http://localhost:8080/api/v1/reviews';

  constructor(private http:HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}`);
  }

  public getMovieByImdbId(imdbId: string) : Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${imdbId}`);
  }

  postReview(review: PostReviewRequest) {
    return this.http.post(this.reviewUrl, review);
  }

}

export interface PostReviewRequest {
  imdbId: string;
  reviewBody: string;
}
