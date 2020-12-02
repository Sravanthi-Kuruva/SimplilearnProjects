package com.subjects;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class GetAllSubjects 
{
	public List<Subjects> getSubjectslist() throws ServletException
	{
		
	SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Subjects.class).buildSessionFactory();
	
	Session thesession= theFactory.getCurrentSession();
	
	List<Subjects> listofAllSubjects = new ArrayList<>();
	
		try
		{
			thesession.beginTransaction(); 
			
			 listofAllSubjects =thesession.createQuery("from Subjects").getResultList();
			
			
			
		for(Subjects theSubject: listofAllSubjects)
		{
			System.out.println("the subjectsname are "+theSubject.getsubject());
		}
		//thesession.getTransaction().commit();
		}
		finally
		{
			theFactory.close();
		}

		return listofAllSubjects;
	}
}




