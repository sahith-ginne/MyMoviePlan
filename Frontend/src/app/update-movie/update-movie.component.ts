import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movie : any;
  id : any;
  
  constructor(private service : MovieService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.movie = new Movie();
    this.id = this.route.snapshot.params['id'];
    this.service.getMovieById(this.id).subscribe(data=>
      {
        console.log(data)
        this.movie = data;
      },error=> console.log(error));
  }

  updateMovie(){
    console.log(this.movie)
    this.movie = new Movie();
    
    
    
  }
      // this.saveMovie();
  }

