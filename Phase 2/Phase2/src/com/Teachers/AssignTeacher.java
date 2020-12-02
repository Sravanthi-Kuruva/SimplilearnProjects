package com.Teachers;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="teachers_class_subject")
public class AssignTeacher 
{
	@Id
	@Column(name="Id")
     int Id;
    @Column(name="Teacher")
    String Teacher;
    
	@Column(name="Subject")
	String Subject;
	
	@Column(name="Class")
	String Class;

	
	public AssignTeacher ()
	{
		
	}
	public int getId()
	{
		return Id;
	}
public String getclass()
{
return getclass();
}
 
public String getsubject()
{
	return getsubject();
}
public String getteacher()
{
	return getteacher();
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
public void setteacher(String Teacher)
{
	this.Teacher=Teacher;
}
public AssignTeacher(String Class,String Subject,String Teacher)
{
	this.Subject=Subject;
	this.Class=Class;
	this.Teacher=Teacher;
}

@Override
public String toString() 
{
	return "classes_Subjects[subject="+Subject+ ",Id=" +Id +",Class="+Class+","+Teacher+"]";
}
}
