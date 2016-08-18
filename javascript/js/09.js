function max(){
	  var num1= document.getElementById("num1").value;
	  var num2= document.getElementById("num2").value;
	  var num3= document.getElementById("num3").value;
	  if(num1>num2 && num1>num3)
		  document.write(num1 +"is largest");
	  else if(num2 > num1 && num2> num3)
		  document.write(num2 +"is largest");
	  else 
		  document.write(num3 +"is largest");
		  
}