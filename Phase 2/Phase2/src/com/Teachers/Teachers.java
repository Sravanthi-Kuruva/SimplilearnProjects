package com.Teachers;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="teachers")
public class Teachers
{
	@Id
	@Column(name="Id")
     int Id;

	@Column(name="Teacher")
	String Teacher;
	
	public Teachers()
	{
		
	}
	
	public int getId()
	{
		return Id;
	}
public String getteacher()
{
return Teacher;
}

public void setTeacher(String teacher){
	this.Teacher=teacher;
}
public void setId(int Id)
		{
	this.Id=Id;
		}
public Teachers(String teacher)
{
	this.Teacher=teacher;
}

@Override
public String toString() {
	return "Teachers [teacher=" + Teacher + ",Id=" +Id +"]";
}

}
