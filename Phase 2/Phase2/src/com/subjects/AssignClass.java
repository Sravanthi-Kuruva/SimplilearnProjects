package com.subjects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="classes_subjects")
public class AssignClass
{
	@Id
	@Column(name="Id")
     int Id;

	@Column(name="Subject")
	String Subject;
	
	@Column(name="Class")
	String Class;

	
	public AssignClass ()
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
 
public String getsubject()
{
	return getsubject();
}

public void setclass(String Class){
	this.Class=Class;
}
public void setId(int Id)
		{
	this.Id=Id;
		}
public void setsubject(String subject)
{
	this.Subject=subject;
}
public AssignClass(String Class,String Subject)
{
	this.Subject=Subject;
	this.Class=Class;
}

@Override
public String toString() 
{
	return "classes_Subjects[subject="+Subject+ ",Id=" +Id +",Class="+Class+"]";
}


}

