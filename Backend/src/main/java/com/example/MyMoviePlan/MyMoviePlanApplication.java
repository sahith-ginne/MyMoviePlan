package com.example.MyMoviePlan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.MyMoviePlan.Controller"})
public class MyMoviePlanApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyMoviePlanApplication.class, args);
	}

}
