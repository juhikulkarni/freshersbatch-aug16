function employeeList(){
var Employee= new Array();
Employee[0]= document.getElementById("id").value;
window.location.assign("EmployeeList.html");
Employee[1]= document.getElementById("id").value;
}

function sort()

{
	var sort= new employeeList();
	for (i=0;i<sort.Employee.length;i++)
	{
		sort.Employee[i].sort();
		
		document.getElementById("id").value= sort.Employee[i];
		document.write("sorted id"+ sort.Employee)
	 
	}
	  
	}
