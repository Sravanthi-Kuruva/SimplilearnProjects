package com.movieplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movieplan.model.BookedSeats;
import com.movieplan.model.Movie;
import com.movieplan.model.Theater;

public interface theaterRepository extends JpaRepository<Theater, Long>{
	@Query("SELECT distinct t FROM Movie m join Theater t on t.movie = m where t.movie=?1")
	List<Theater> getTheatersByMovie(Movie movie);
}
