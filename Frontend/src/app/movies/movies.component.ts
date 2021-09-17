import { MovieService } from './../movie.service';


import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : any;
  

  constructor(private service : MovieService,  private router :Router) { }

  ngOnInit(): void 

   {
    this.service.getMovieList().subscribe(data=>{
      this.movies = data
    })
  }

  buy(movie: Movie) {
    console.log(movie);
    this.router.navigate(['payment'], { queryParams: movie });
  }
}
