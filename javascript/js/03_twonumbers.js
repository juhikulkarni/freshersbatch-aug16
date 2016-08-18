function divide(){
	var number1= document.getElementById("number1").value;
	var number2= document.getElementById("number2").value;
	if (number2== 0){
		alert("second number cannot be zero.");
	}
	var divide= number1/number2;
	document.write("quotient is"+ "  " + divide);
	
}/**
 * 
 */