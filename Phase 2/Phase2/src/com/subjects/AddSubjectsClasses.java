package com.subjects;

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

import com.Student.Students;

@WebServlet("/addSubjectClasses")
public class AddSubjectsClasses extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
	PrintWriter out= response.getWriter();
	String SubjectName=request.getParameter("subjectName");
	String ClassName=request.getParameter("className");
	
SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(AssignClass.class).buildSessionFactory();

Session thesession= theFactory.getCurrentSession();
response.sendRedirect("SubjectClasses.jsp" );

try
{
	AssignClass theassignclass= new AssignClass(ClassName,SubjectName);	
	
	thesession.beginTransaction();

	thesession.save(theassignclass);

	thesession.getTransaction().commit();

}

finally
{
theFactory.close();
}
out.println("Subject added successfully  "+SubjectName+" assigned to class "+ClassName);

}	

protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
{
	PrintWriter out= response.getWriter();
	out.println("coming from a post request");	// TODO Auto-generated method stub
}

}

		
	