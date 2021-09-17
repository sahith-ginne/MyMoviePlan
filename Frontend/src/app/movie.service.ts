import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';




@Injectable({
  providedIn: 'root'
})
export class MovieService {
  UpdateMovie //   //  return this.http.delete("http://localhost:8080/api/v1/movies"+movieid);
    (_id: number, _movie: Movie) {
      throw new Error('Method not implemented.');
  }

  URL = "http://localhost:8080/api/v1/movies"

  constructor(private http : HttpClient) { }

  getMovieList(): Observable<object>{

    // return this.http.get("http://localhost:8080/api/v1/movies");
    return this.http.get(this.URL);

  }

  createMovie(movie:Movie) : Observable<object>{
    // return this.http.post("http://localhost:8080/api/v1/movies",movie)
    return this.http.post(this.URL,movie);
  }

  getMovieById(_id:number): Observable<object>{
    return this.http.get(this.URL);

  }

  deleteMovie(id:number) : Observable<object>{
    const url = `${this.URL}/${id}`;
    //  return this.http.delete("http://localhost:8080/api/v1/movies"+movieid);
    return this.http.delete(url)
  }

  // updateMovie(movieid:string) : Observable<object>{
  //   return this.http.put("http://localhost:8080/api/v1/movies",movieid)
  // }
}
