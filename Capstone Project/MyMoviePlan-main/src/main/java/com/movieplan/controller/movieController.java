package com.movieplan.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.movieplan.model.Movie;
import com.movieplan.repository.movieRepository;

@RestController
@CrossOrigin
@RequestMapping("/movies")
public class movieController {
	
	@Autowired
	private movieRepository mRepo;
	
	@GetMapping("/{movieId}")
	public Optional<Movie> getMovie(@PathVariable long movieId) {
		
		Optional<Movie> theMovie = mRepo.findById(movieId);
		
		if (theMovie == null) {
			throw new RuntimeException("Employee id not found - " + movieId);
		}
		
		return theMovie;
	}
	
	@GetMapping("/")
	public List<Movie> getAllMovies() {
		
		List<Movie> theMovies = mRepo.findAll();
		
		return theMovies;
	}
	
	@GetMapping("/active/")
	public List<Movie> getAllActiveMovies() {
		
		List<Movie> theMovies = mRepo.getMoviesByTheater();
		
		return theMovies;
	}
	
	@PostMapping("/")
	public Movie add(@RequestBody Movie theMovie) {
		
		theMovie.setId(0);
		
		Movie theResMovie = mRepo.save(theMovie);
		
		

		return theResMovie;
	}
	
	@PutMapping("/{movieId}")
	public Movie editMovie(@PathVariable long movieId,
			@RequestBody Movie theMovie) {
		
		theMovie.setId(movieId);
		
		Movie resMovie = mRepo.save(theMovie);
		
		return resMovie;
	}
	
	@DeleteMapping("/{movieId}")
	public ResponseEntity<Map<String, Object>> delete(@PathVariable long movieId) {
		
		mRepo.deleteById(movieId);
		
		Map<String,Object> map = new HashMap<>();
		map.put("text","Deleted Movie Id"+ movieId);

		return ResponseEntity.status(HttpStatus.OK)
		        .body(map);
		
	}
	
}
