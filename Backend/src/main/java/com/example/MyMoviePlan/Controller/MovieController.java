package com.example.MyMoviePlan.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyMoviePlan.Model.Admin;
import com.example.MyMoviePlan.Model.Movie;
import com.example.MyMoviePlan.Model.User;
import com.example.MyMoviePlan.Repository.AdminRepo;
import com.example.MyMoviePlan.Repository.MovieRepo;
import com.example.MyMoviePlan.Repository.UserRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/api/v1/")
public class MovieController {
	
	@Autowired
	private MovieRepo movierepo;
	@Autowired
	private AdminRepo adminrepo;
	@Autowired
	private UserRepo userrepo;
	
	@GetMapping("/movies")
	public List<Movie> getallMovies(){
		return movierepo.findAll();
	}
	
//	create movie rest api
	@PostMapping("/movies")
	public Movie createMovie(@RequestBody Movie movie) {
		return movierepo.save(movie);
	}
	
	@DeleteMapping("/movies/{id}")
//	public Movie deleteMovie(@PathVariable Long id) {
//		Movie movie = movierepo.getOne(id);
//		movierepo.delete(movie);
//		return movierepo.save(movie);
//	}
	public ResponseEntity<Map<String, Boolean>>  deleteMovie(@PathVariable(value = "id") Long id) {
		Movie movie = movierepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("not found"+ id));
		movierepo.delete(movie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
				
//		return movierepo.save(movie);
	}
	@PutMapping("/movies/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable Long id , @RequestBody Movie movieList){
		Movie movie = movierepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("not found"+ id));
		movie.setName(movieList.getName());
		movie.setAmount(movieList.getAmount());
		movie.setCast(movieList.getCast());
		movie.setDuration(movieList.getDuration());
		movie.setGenres(movieList.getGenres());
		movie.setImage(movieList.getImage());
		
		Movie updatedMovie = movierepo.save(movie);
		return ResponseEntity.ok(updatedMovie);
	}
	
	@GetMapping("/admins")
	public List<Admin>getallAdmins(){
		return adminrepo.findAll();
		}
	
	@PostMapping("/admins")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminrepo.save(admin);
	}
	
	@GetMapping("/users")
	public List<User>getallUsers(){
		return userrepo.findAll();
	}
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userrepo.save(user);
	}

}
