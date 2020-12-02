package com.subjects;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="subjects")
public class Subjects 
{
	@Id
	@Column(name="Id")
     int Id;

	@Column(name="Subject")
	String Subject;
	
	public Subjects()
	{
		
	}
	public int getId()
	{
		return Id;
	}
public String getsubject()
{
return Subject;
}

public void setSubject(String subject){
	this.Subject=subject;
}
public void setId(int Id)
		{
	this.Id=Id;
		}
public Subjects(String Subject)
{
	this.Subject=Subject;
}

@Override
public String toString() {
	return "Subjects [Subject=" + Subject + ",Id=" +Id +"]";
}


}