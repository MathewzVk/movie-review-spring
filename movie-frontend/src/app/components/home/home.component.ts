import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../../models/movie';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  images = [62, 83, 466, 965, 982, 1043, 738].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  interval = 2000;
  pauseOnHover = true;
  pauseOnFocus = true;
  faPlayCircle = faPlayCircle;

  constructor(public movieService: MovieService, private router: Router){
    this.movieService.getMovies();
  }


  handlePlayButton(imdbId: string) {
    this.router.navigate(['trailer', imdbId]);
  }

  handleReviewButton(imdbId: string) {
    this.router.navigate(['review', imdbId]);
  }




}
