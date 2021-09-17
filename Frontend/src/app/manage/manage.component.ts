import { Router } from '@angular/router';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  movies: any;

  

  constructor(private service : MovieService , private router : Router) { }

  ngOnInit(): void {
    this.service.getMovieList().subscribe(data=>{
      this.movies = data
    })
  }


  // updateMovie(id:number){
  //   this.router.navigate(['update-movie',id]);

  // }
  
  deleteMovie(id:number) {
    this.service
  .deleteMovie(id)
  .subscribe(data=>{
    console.log(data);
    this.goToMoviesList();
    
  });
  // console.log(this.movies);
  } 

  goToMoviesList(){
    this.router.navigate(['manage']);
  }


  // deleteMovie(movies:any) {
  //   this.service.deleteMovie(this.movies).subscribe(data=>{
  //     console.log(data);
      
  //   this.router.navigate(['manage']);

  //   })
    
  // }
}
