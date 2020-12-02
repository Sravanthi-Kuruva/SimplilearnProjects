package com.classes;

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

import com.subjects.Subjects;


@WebServlet("/addClass")
public class AddClass extends HttpServlet 
{
	private static final long serialVersionUID = -3728019632715854450L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			PrintWriter out= response.getWriter();
			String className=request.getParameter("ClassName");
			response.setContentType("text/html");
			//out.println("Add Subject page is working now Subject name "+subjectName);
			
			SessionFactory theFactory= new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Classes.class).buildSessionFactory();
		
			Session thesession= theFactory.getCurrentSession();
		
			try
			{
				Classes theclass=new Classes(className);	
		
				thesession.beginTransaction();
		
				thesession.save(theclass);
		
				thesession.getTransaction().commit();
				
				
			}
			catch (Exception e) {
				response.sendRedirect("Error.jsp");
			}
		
			finally{
			theFactory.close();
			}
			
			
			out.println("<div align=\"Center\">");
			out.println("<b>"+className+" Class added successfully </b>");
			out.println("<br><br>");
			out.println("<a href=\"Class.jsp\">Add Classes</a>");
			out.println("</div>");
			
			
			
			
		}	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{

	PrintWriter out= response.getWriter();
	out.println("coming from a post request");
	}
	}	

