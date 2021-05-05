package com.movieplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieplan.model.User;

public interface userRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);

}
