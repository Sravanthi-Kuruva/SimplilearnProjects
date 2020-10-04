package pack1;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

public class FileOperation {

	public static void main(String[] args) 
	{
		FileOperation fileOp = new FileOperation();
		
		fileOp.showMenu();
		
	}
	
	void showMenu() {
		System.out.println("File Operations Application");
		System.out.println("Choose from below options");
		System.out.println("1 Add a file");
		System.out.println("2 Delete a file");
		System.out.println("3 Search a file");
		System.out.println("4 Exit");
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter the option.. " );
		String option = scan.next();
			if(option.matches("[1-4]"))
				{
		

		        switch (option) { 
		        case "1": 
		        	addFile();
		            break; 
		        case "2": 
		        	deleteFile();
		            break; 
		        case "3": 
		        	searchFile();
		            break; 
		        case "4": 
		        	System.out.println("Exiting from the application");
		        	return;
		            	      
		        }
		}else 
		{
		System.out.println("Invalid option");
		System.out.println("Exiting from the application");
		return;
		}
		
	}
	
	
	
	void addFile() {

		FileOutputStream newfile =null;
		BufferedOutputStream bos = null;
		String filePath = "root/folder/subfolder/";
		try {
			Scanner scan = new Scanner(System.in);
    		System.out.println("Enter the filename to be added.. " );
    		String fileName = scan.next();
    		fileName=filePath+fileName;
		 newfile = new FileOutputStream(fileName);
		 bos = new BufferedOutputStream(newfile);
		String message = "Hello I need to write a program in a new file";
		byte b[] = message.getBytes();
		bos.write(b);
		System.out.println("Added the file "+fileName);
		System.out.println("Enter 5 to navigate to main menu.. " );
		String input = scan.next();
		if(input.equalsIgnoreCase("5"))
			{showMenu();}
		else {
			System.out.println("Invalid option");
			System.out.println("Exiting from the application");
			return;
		}
			
		}
		
		catch(FileNotFoundException e) {
				System.out.println(e);
				
		}
		catch(IOException e)
		{
			System.out.println(e);
		}
		finally {
			
			try {
				bos.flush();
				bos.close();
				newfile.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}
	
	void deleteFile()
	{
		File file = null;
		String filePath = "root/folder/subfolder/";
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter the filename to be deleted.. " );
		String fileName = scan.next();
		fileName=filePath+fileName;
		file = new File(fileName);
		if(file.exists()) {
			file.delete();
			System.out.println("Deleted the file "+fileName);
			System.out.println("Enter 5 to navigate to main menu.. " );
			String input = scan.next();
			if(input.equalsIgnoreCase("5"))
				{showMenu();}
			else {
				System.out.println("Invalid option");
				System.out.println("Exiting from the application");
				return;
			}
			
		}else {
			System.out.println(fileName+" file doesn't exist");
			System.out.println("Exiting from the application");
			return;
		}
		
	}
	
	void searchFile()
	{
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter the file to be searched.. " );
		String fileName = scan.next();
		
		String directory = "root";
		File file= new File(directory);
		findFile(fileName,file);
		
	}
	
	 void findFile(String name,File file)
	 {
		
		File[] list = file.listFiles();
		int fileFound = 0;
		Scanner scan = new Scanner(System.in);
		if(list!=null) {
			for (File fil : list)
			{
				if (fil.isDirectory())
				{
					findFile(name,fil);
				}
				else if (name.equalsIgnoreCase(fil.getName()))
				{
					System.out.println("The file "+name+ " is found at " +fil.getParentFile());
					fileFound=1;
					break;
				}
			}
		}
		if(fileFound==1) {
			System.out.println("Enter 5 to navigate to main menu.. " );
			String input = scan.next();
			if(input.equalsIgnoreCase("5"))
			{showMenu();}
			else {
			System.out.println("Invalid option");
			System.out.println("Exiting from the application");
			return;
			}
		}
		
		
	 }

}
