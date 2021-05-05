package com.movieplan.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movieplan.model.BookedSeats;
import com.movieplan.model.Theater;

public interface bookedSeatsRepository extends JpaRepository<BookedSeats, Long>{
	
	@Query("SELECT distinct bs FROM BookedSeats bs where bs.theater=?1 and bs.date=?2 and bs.time=?3")
	List<BookedSeats> getBookSeatsByDateTime(Theater theater, Date date, String time);
	
}
