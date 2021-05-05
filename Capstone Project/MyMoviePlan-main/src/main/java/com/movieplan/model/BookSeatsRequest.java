package com.movieplan.model;

import java.util.Date;
import java.util.List;

public class BookSeatsRequest {
	
	private String time;
	
	private Date date;
	
	private List<String> seats;

	public BookSeatsRequest() {
		super();
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<String> getSeats() {
		return seats;
	}

	public void setSeats(List<String> seats) {
		this.seats = seats;
	}
	
	

}
