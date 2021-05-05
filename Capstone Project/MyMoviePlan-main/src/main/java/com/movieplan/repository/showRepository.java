package com.movieplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieplan.model.MovieShow;

public interface showRepository extends JpaRepository<MovieShow, Long>{

}
