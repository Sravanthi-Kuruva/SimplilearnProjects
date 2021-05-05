package com.movieplan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BookingHistory {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private long id;
	@Column
	private String name;
	@Column
	private String show_id;
	@Column
	private String theatre_id;
	@Column
	private String seat_nos;
	
	public BookingHistory() {
		super();
	}

}
