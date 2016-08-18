function factorial(){
	var number= document.getElementById("number").value;
	

	var flag=1;
	for(var i=1;i<=number;i++){
		flag=flag*i;
		}
		document.write("Factorial of "+number+" is: "+flag);
}/**
 * 
 */