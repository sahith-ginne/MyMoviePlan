package com.example.MyMoviePlan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MyMoviePlan.Model.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Long>{

}