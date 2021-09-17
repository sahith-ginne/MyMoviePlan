package com.example.MyMoviePlan.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movies")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name ="moviename")
	private String name;
	@Column(name = "price")
	private long amount;
	@Column(name = "image")
	private String image;
	@Column(name="genres")
	private String genres;
	@Column(name = "duration")
	private String duration;
	@Column(name="cast")
	private String cast;
	public Movie() {
		
	}
	public Movie(String name, long amount, String image, String genres, String duration, String cast) {
		super();
		this.name = name;
		this.amount = amount;
		this.image = image;
		this.genres = genres;
		this.duration = duration;
		this.cast = cast;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getGenres() {
		return genres;
	}
	public void setGenres(String genres) {
		this.genres = genres;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getCast() {
		return cast;
	}
	public void setCast(String cast) {
		this.cast = cast;
	}
	
	
}
