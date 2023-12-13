import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.css'
})
export class TrailerComponent implements OnInit{


  movie!: Movie;
  imdbId!: string;
  trailerLink!: string;
  embedLink!: string;
  vid_id!: string;

  constructor(public movieService: MovieService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.imdbId = this.route.snapshot.params['imdbId'];
    
    this.movieService.imdbId.set(this.imdbId);

    }


}
