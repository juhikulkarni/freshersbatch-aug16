function multiplicationTable(){
	var number= document.getElementById("number").value;
	var i;
	var temp=number;
	for(i=1; i<=10;i++)
		{
		temp=number*i;
		document.write(temp+ "  ");
		}
	document.write("<hr>");
	document.write("<input type='button' value='proceed?' onclick='ask()'>");
}

function ask(){
	var r=confirm("do you want to continue?");
	
	if(r==true){
		window.location.assign("04_multiplication_table.html");
	}
	else{
		document.write("<h1> thank you</h1>");
	}
}
 