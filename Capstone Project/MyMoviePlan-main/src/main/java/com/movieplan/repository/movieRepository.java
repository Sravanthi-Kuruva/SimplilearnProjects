package com.movieplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movieplan.model.Movie;

public interface movieRepository extends JpaRepository<Movie, Long>{
	
	@Query("SELECT distinct m FROM Movie m join Theater t on t.movie = m")
	List<Movie> getMoviesByTheater();

}
