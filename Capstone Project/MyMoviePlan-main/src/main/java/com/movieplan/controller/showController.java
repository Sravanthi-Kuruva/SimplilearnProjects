package com.movieplan.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movieplan.model.MovieShow;
import com.movieplan.repository.showRepository;

@RestController
@RequestMapping("/movieshow")
@CrossOrigin(origins = "http://localhost:4200")
public class showController {
	
	@Autowired
	private showRepository sRepo;
	
	@GetMapping("/{showId}")
	public MovieShow getMovie(@PathVariable long showId) {
		
		MovieShow show = sRepo.getOne(showId);
		return show;
	}
	
/*	@PutMapping("/{showId}")
	public Show editMovie(@PathVariable long movieId,
			@RequestBody Show theMovie) {
		
		Show movie = sRepo.getOne(movieId);
		
		if(theMovie.getLanguage() != null) {
			movie.setLanguage(theMovie.getLanguage());
		}
		if(theMovie.getDuration() != null) {
			movie.setDuration(theMovie.getDuration());
		}
		if(theMovie.getName() != null) {
			movie.setName(theMovie.getName());
		}
		if(theMovie.getReleaseDate() != null) {
			movie.setReleaseDate(theMovie.getReleaseDate());
		}
		if(theMovie.getCensorCertificate() != null) {
			movie.setCensorCertificate(theMovie.getCensorCertificate());
		}
		Show resMovie = movieService.updateMovie(movie);
		
		return resMovie;
	}
	
	@PostMapping("/{showId}")
	public Show addShow() {
		Show show = sRepo.getOne(null)
	}*/
	
	@DeleteMapping("/{showId}")
	public ResponseEntity<Map<String, Object>> delete(@PathVariable long showId) {
		
		MovieShow show = sRepo.getOne(showId);
		
		sRepo.deleteById(showId);
		
		Map<String,Object> map = new HashMap<>();
		map.put("text","Deleted Movie Id"+ showId);
		map.put("obj", show);
		
		return ResponseEntity.status(HttpStatus.OK)
		        .body(map);
		
	}
		
	@GetMapping("/")
	public List<MovieShow> getAllShows() {
		
		List<MovieShow> theShows = sRepo.findAll();
		
		return theShows;
	}

}
