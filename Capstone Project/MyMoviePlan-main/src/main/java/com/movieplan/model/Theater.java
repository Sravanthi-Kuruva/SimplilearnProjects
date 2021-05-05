package com.movieplan.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Theater {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@Column
	private String theatreName;
	
	@Column
	private String theatreAddress;
	
	@ManyToOne(cascade= {CascadeType.MERGE,
			 CascadeType.DETACH, CascadeType.REFRESH}, fetch = FetchType.EAGER)
	@JoinColumn(name="movie")
	private Movie movie;
	
	@OneToMany(mappedBy = "theater")
    private List<BookedSeats> seats;
	
	@Column
	private Integer theatreSeatCapacity;
	public Theater() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public String getTheatreName() {
		return theatreName;
	}

	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}

	public String getTheatreAddress() {
		return theatreAddress;
	}

	public void setTheatreAddress(String theatreAddress) {
		this.theatreAddress = theatreAddress;
	}

	public Integer getTheatreSeatCapacity() {
		return theatreSeatCapacity;
	}

	public void setTheatreSeatCapacity(Integer theatreSeatCapacity) {
		this.theatreSeatCapacity = theatreSeatCapacity;
	}
	
	
}
