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
import com.movieplan.model.Theater;
import com.movieplan.repository.movieRepository;
import com.movieplan.repository.theaterRepository;

@RestController
@CrossOrigin
@RequestMapping("/theater")
public class theaterController {

	@Autowired
	private theaterRepository tRepo;
	
	@Autowired
	private movieRepository mRepo;
	
	@GetMapping("/{theaterId}")
	public Optional<Theater> getMovie(@PathVariable long theaterId) {
		
		Optional<Theater> theTheater = tRepo.findById(theaterId);

		return theTheater;
	}
	
	@GetMapping("/")
	public List<Theater> getAllMovies() {
		
		List<Theater> theTheaters = tRepo.findAll();
		
		return theTheaters;
	}
	
	@GetMapping("/bymovie/{movieId}")
	public ResponseEntity<Map<String, Object>> getAllTheatersByMovieId(@PathVariable long movieId) {
		
		Movie movie = mRepo.getOne(movieId);
		System.out.println(movie);
		List<Theater> theTheaters = tRepo.getTheatersByMovie(movie);
		System.out.println(theTheaters);
		for(Theater theater:theTheaters){
			System.out.println(theater);
		}
		Map<String,Object> map = new HashMap<>();
		map.put("text",theTheaters);
		return ResponseEntity.status(HttpStatus.OK)
		        .body(map);
	}
	
	@PostMapping("/{movieId}")
	public ResponseEntity<Map<String, Object>> add(@RequestBody Theater theTheater, @PathVariable long movieId) {
		
		theTheater.setId(0);
		Movie movie = mRepo.getOne(movieId);
		theTheater.setMovie(movie);
		tRepo.save(theTheater);
		Map<String,Object> map = new HashMap<>();
		map.put("text","Successfully added");
		return ResponseEntity.status(HttpStatus.OK)
		        .body(map);
	}
	
	@PutMapping("/{theaterId}/{movieId}")
	public ResponseEntity<Map<String, Object>> editMovie(@PathVariable long theaterId, 
			@PathVariable long movieId,
			@RequestBody Theater theTheater) {
		
		Theater theTheater1 = new Theater();
		Movie movie = mRepo.getOne(movieId);
		theTheater1.setTheatreName(theTheater.getTheatreName());
		theTheater1.setTheatreAddress(theTheater.getTheatreAddress());
		theTheater1.setMovie(movie);
		theTheater1.setId(theaterId);
		
		Theater resTheter = tRepo.save(theTheater1);
		
		Map<String,Object> map = new HashMap<>();
		map.put("text","Successfully edited");
		return ResponseEntity.status(HttpStatus.OK)
		        .body(map);
	}
	
	@DeleteMapping("/{theaterId}")
	public ResponseEntity<Map<String, Object>> delete(@PathVariable long theaterId) {
		
		tRepo.deleteById(theaterId);
		
		Map<String,Object> map = new HashMap<>();
		map.put("text","Deleted Theater Id"+ theaterId);

		return ResponseEntity.status(HttpStatus.OK)
		        .body(map);
		
	}

}
