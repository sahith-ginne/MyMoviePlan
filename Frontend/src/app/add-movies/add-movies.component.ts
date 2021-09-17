import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  movie : Movie = new Movie();

  constructor(private service : MovieService, private router : Router) { }

  ngOnInit(): void {
  }

  

   saveMovie() {
    this.service.createMovie(this.movie).subscribe(data=>{
    console.log(data);
    this.goToMoviesList();
    }
      
    )
  }

  goToMoviesList(){
    this.router.navigate(['manage']);
  }

  createMovie() {
    console.log(this.movie);
  
      this.saveMovie();
    
  }

}
