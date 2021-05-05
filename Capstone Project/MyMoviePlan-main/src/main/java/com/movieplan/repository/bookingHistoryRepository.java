package com.movieplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieplan.model.BookingHistory;

public interface bookingHistoryRepository extends JpaRepository<BookingHistory, Long>{

}
