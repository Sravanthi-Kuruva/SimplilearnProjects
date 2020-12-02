<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
String classname = request.getParameter("className");
String driver = "com.mysql.cj.jdbc.Driver";
String connectionUrl = "jdbc:mysql://localhost:3306/";
String database = "learners academy";
String userid = "root";
String password = "";
try {
Class.forName(driver);
} catch (ClassNotFoundException e) {
	response.sendRedirect("Error.jsp");
}
Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<body>
<div align="Center">
<h1>Report of <%=classname%> class</h1>
<br><br>
<table border="1">
<tr>

<td><b>Student</b></td>
<td><b>Subject</b></td>
<td><b>Teacher</b></td>


</tr>
<%
try{
connection = DriverManager.getConnection(connectionUrl+database, userid, password);
statement=connection.createStatement();
String sql ="select s.Student,tcs.Subject,tcs.Teacher from students s,teachers_class_subject tcs where s.Class = tcs.Class and s.Class = '"+classname+"'";
System.out.println(sql);
resultSet = statement.executeQuery(sql);
while(resultSet.next()){
%>
<tr>
<td><%=resultSet.getString("Student")%></td>
<td><%=resultSet.getString("Subject")%></td>
<td><%=resultSet.getString("Teacher")%></td>

</tr>
<%
}

} 
catch (Exception e) {
	response.sendRedirect("Error.jsp");
}
finally{
	statement.close();
	connection.close();
}
%>



</table>
<br>
<br>
<a href="ClassReport.jsp">Go Back</a>
</div>
</body>
</html>