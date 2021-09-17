package com.example.MyMoviePlan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MyMoviePlan.Model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long>{

}
