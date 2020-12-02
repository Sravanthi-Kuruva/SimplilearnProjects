<%@page import="com.Teachers.GetAllTeachers"%>
<%@page import="com.Teachers.Teachers"%>
<%@page import="com.classes.GetAllClasses"%>
<%@page import="com.classes.Classes"%>
<%@page import="com.subjects.GetAllSubjects"%>
<%@page import="com.subjects.Subjects"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <% 
GetAllTeachers getAllTeacher = new  GetAllTeachers();
List<Teachers> listofAllTeachers = new ArrayList<Teachers>();
listofAllTeachers = getAllTeacher.getTeacherslist();
%>   
<% 
GetAllClasses getAllClasses = new  GetAllClasses();
List<Classes> listofAllClasses = new ArrayList<Classes>();
listofAllClasses = getAllClasses.getClasseslist();
%>   
<%
GetAllSubjects getAllSubjects = new  GetAllSubjects();
List<Subjects> listofAllSubjects = new ArrayList<Subjects>();
listofAllSubjects = getAllSubjects.getSubjectslist();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Teachers List</title>
</head>
<body>
<center>
		<h1>Assign Teachers to Class and Subject</h1>
       <form action="addTeachersClassSubject" method="Get">
            
<table style="with: 50%">

<tr>

<td>
Select a Class:&nbsp;&nbsp;&nbsp;&nbsp;
        <select name = "className">
    <%
        
        for(Classes classes: listofAllClasses)
        {
    %>
        <option> <%=classes.getclass()%> </option>
    <%  
        }
    %>
</select>

</td>
</tr>
<tr>
<td><br></td>
</tr>
<tr>

<td>
Select a Subject:&nbsp;&nbsp;
        <select name = "subjectName">
    <%
        
        for(Subjects subjects: listofAllSubjects)
        {
    %>
        <option> <%=subjects.getsubject()%> </option>
    <%  
        }
    %>
</select>

</td>
</tr>
<tr>
<td><br></td>
</tr>
<tr>

<td>
Select a Teacher:&nbsp;
        <select name = "TeacherName">
    <%
        
        for(Teachers teachers: listofAllTeachers)
        {
    %>
        <option> <%=teachers.getteacher()%> </option>
    <%  
        }
    %>
</select>
</td>
</tr>
</table>
<br></br>
<input type="Submit" value="Submit"/>
<br></br>
<td><div align="Center"><a href="Homepage.jsp">Homepage</a></div></td>
</form>
	</center>
</body>
</html>