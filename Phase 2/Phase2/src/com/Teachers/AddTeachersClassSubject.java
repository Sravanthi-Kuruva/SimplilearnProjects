package com.Teachers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.Teachers.AssignTeacher;

@WebServlet("/addTeachersClassSubject")
public class AddTeachersClassSubject extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		PrintWriter out= response.getWriter();
		String SubjectName=request.getParameter("subjectName");
		String ClassName=request.getParameter("className");
		String TeacherName=request.getParameter("TeacherName");
		
		
	SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(AssignTeacher.class).buildSessionFactory();

	Session thesession= theFactory.getCurrentSession();
	response.setContentType("text/html");

	try
	{		
		AssignTeacher theAssignTeacher = new AssignTeacher(ClassName,SubjectName,TeacherName);
		
		thesession.beginTransaction();

		thesession.save(theAssignTeacher);

		thesession.getTransaction().commit();

	}
	catch (Exception e) {
		response.sendRedirect("Error.jsp");
	}
	finally
	{
	theFactory.close();
	}
	
	response.setContentType("text/html");
	out.println("<div align=\"Center\">");
	out.println("<b>"+SubjectName+" Subject assigned to Class "+ClassName+" and assigned to teacher"+TeacherName+"</b>");
	out.println("<br><br>");
	out.println("<a href=\"TeachersClassSubject.jsp\">Assign Teachers to Classes and Subjects</a>");
	out.println("</div>");
	}	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		PrintWriter out= response.getWriter();
		out.println("coming from a post request");	// TODO Auto-generated method stub
	}
	}


