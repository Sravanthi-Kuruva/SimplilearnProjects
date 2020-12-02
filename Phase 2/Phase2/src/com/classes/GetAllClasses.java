package com.classes;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class GetAllClasses 
{

	public List<Classes> getClasseslist() throws ServletException
	{
		
	SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Classes.class).buildSessionFactory();
	
	Session thesession= theFactory.getCurrentSession();
	
	List<Classes> listofAllClasses = new ArrayList<>();
	
		try
		{
			thesession.beginTransaction(); 
			
			 listofAllClasses =thesession.createQuery("from Classes").getResultList();
			
			
			
		for(Classes theClass: listofAllClasses)
		{
			System.out.println("the classnames are "+theClass.getclass());
		}
		//thesession.getTransaction().commit();
		}
		finally
		{
			theFactory.close();
		}

		return listofAllClasses;
	}
}

