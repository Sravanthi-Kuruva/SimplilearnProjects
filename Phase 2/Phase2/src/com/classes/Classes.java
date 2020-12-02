package com.classes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="classes")
public class Classes {

	@Id
	@Column(name="Id")
     int Id;

	@Column(name="Class")
	String Class;
	
	public Classes()
	{
		
	}
	public int getId()
	{
		return Id;
	}
public String getclass()
{
return Class;
}

public void setClass(String Class)
{
	this.Class=Class;
}
public void setId(int Id)
		{
	this.Id=Id;
		}
public Classes(String Class)
{
	this.Class =Class;
}

@Override
public String toString() {
	return "Classes[Class=" + Class + ",Id=" +Id +"]";
}	
	

}
