package com.movieplan.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movieplan.model.Movie;
import com.movieplan.model.User;
import com.movieplan.model.authUser;
import com.movieplan.repository.movieRepository;
import com.movieplan.repository.userRepository;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class userController {
	@Autowired
	private userRepository uRepo;
	
	@PostMapping("/authenticate")
	public User authenticate(@RequestBody authUser authuser) {
		
		String email = authuser.getEmail();
		String password = authuser.getPassword();
		
		User theUser = uRepo.findByEmail(email);
		String Userpassword = theUser.getPassword();
		
		if(Userpassword.equals(password)) {
			System.out.println("login succesful");
		} else {
			throw new RuntimeException("password or email is incorrect");
		}
		return theUser;
	}
	
	@PostMapping("/signup")
	public User add(@RequestBody User theUser) {
		
		theUser.setId(0);
		
		uRepo.save(theUser);
		
		return theUser;
	}
}
