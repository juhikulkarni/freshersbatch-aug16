function validateForm() {
	var counter=0;
	var userid= document.getElementById("userid").value;
	var password= document.getElementById("password").value;
	while(counter<=3){
	 if(   userid == "workshop"
	       && password == "workshop" )
	    {
	        alert( "validation succeeded" );
	       
	    }
	 else {
		 alert("validation failed");
	     counter++;
	 }
	}
	 
		 location.href="fail.html";
		 
		}
	  


