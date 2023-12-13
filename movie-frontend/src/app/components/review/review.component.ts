import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent  implements OnInit {


  constructor(private http: HttpService, private route: ActivatedRoute){}

  movie!: Movie

  ngOnInit(): void {
    
  }



}
