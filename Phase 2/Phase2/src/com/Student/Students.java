package com.Student;

	import javax.persistence.Column;
	import javax.persistence.Entity;

	import javax.persistence.Table;
	import javax.persistence.Id;

	@Entity
	@Table(name="students")
	public class Students 
	{
		@Id
		@Column(name="Id")
	     int Id;

		@Column(name="Student")
		String Student;
		
		@Column(name="Class")
		String Class;
		
		public Students()
		{
			
		}
		public int getId()
		{
			return Id;
		}
	public String getstudent()
	{
	return Student;
	}
	 
	public String getclass()
	{
		return Class;
	}

	public void setStudent(String student){
		this.Student=student;
	}
	public void setId(int Id)
			{
		this.Id=Id;
			}
	public void setClass(String Class)
	{
		this.Class=Class;
	}
	public Students(String Student,String Class)
	{
		this.Student=Student;
		this.Class=Class;
	}

	@Override
	public String toString() {
		return "Students [Student=" + Student + ",Id=" +Id +",Class="+Class+"]";
	}


	}
