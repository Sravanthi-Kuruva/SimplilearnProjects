package com.Student;

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

@WebServlet("/addStudent")
public class AddStudent extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out= response.getWriter();
		String studentName=request.getParameter("StudentName");
		String ClassName=request.getParameter("className");
	SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Students.class).buildSessionFactory();
	
	Session thesession= theFactory.getCurrentSession();
	response.setContentType("text/html");

	try
	{
		Students thestudent= new Students(studentName,ClassName);	

		thesession.beginTransaction();

		thesession.save(thestudent);

		thesession.getTransaction().commit();
	
	}
	catch (Exception e) {
		response.sendRedirect("Error.jsp");
	}
	finally
	{
	theFactory.close();
	}
	
	
	
	out.println("<div align=\"Center\">");
	out.println("<b>"+studentName+" Student added successfully and assigned to Class "+ClassName+"</b>");
	out.println("<br><br>");
	out.println("<a href=\"Student.jsp\">Add Students</a>");
	out.println("</div>");

}	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		PrintWriter out= response.getWriter();
		out.println("coming from a post request");	// TODO Auto-generated method stub
	}
	
	

}
