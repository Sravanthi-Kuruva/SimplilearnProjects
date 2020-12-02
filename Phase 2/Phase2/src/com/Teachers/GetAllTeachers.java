package com.Teachers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class GetAllTeachers 
{
	public List<Teachers> getTeacherslist() throws ServletException
	{
		
	SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Teachers.class).buildSessionFactory();
	
	Session thesession= theFactory.getCurrentSession();
	
	List<Teachers> listofAllTeachers = new ArrayList<>();
	
		try
		{
			thesession.beginTransaction(); 
			
			 listofAllTeachers =thesession.createQuery("from Teachers").getResultList();
			
			
			
		for(Teachers theTeacher: listofAllTeachers)
		{
			System.out.println("the teachername are "+theTeacher.getteacher());
		}
		//thesession.getTransaction().commit();
		}
		finally
		{
			theFactory.close();
		}

		return listofAllTeachers;
	}

	

}
