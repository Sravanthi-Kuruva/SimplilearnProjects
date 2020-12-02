<%@page import="com.classes.GetAllClasses"%>
<%@page import="com.classes.Classes"%>
<%@page import="com.subjects.GetAllSubjects"%>
<%@page import="com.subjects.Subjects"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <% GetAllClasses getAllClasses = new  GetAllClasses();
List<Classes> listofAllClasses = new ArrayList<Classes>();
listofAllClasses = getAllClasses.getClasseslist();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<center>
		<h1>Class Report</h1>
       <form action="GetReport.jsp" method="Get">
            
<table style="with: 50%">

<tr>

<td>
Select a Class:&nbsp;&nbsp;&nbsp;
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


</table>
<br></br>
<input type="Submit" value="Get Report"/>
<br></br>

<td><div align="Center"><a href="Homepage.jsp">Homepage</a></div></td>
</form>
	</center>
    
</body>
</html>