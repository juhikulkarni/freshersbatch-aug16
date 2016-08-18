function bankAccount(accNo,accBal,accName){
	this.accNo=accNo;
	this.accBal=accBal;
	this.accName=accName;
}

	function withdraw(){
		var accNo=document.getElementById("accNo").value;
		var accName=document.getElementById("accName").value;
		var accBal=document.getElementById("accBal").value;
		var amt=document.getElementById("amt").value;
		var bank= new bankAccount(accNo,accBal,accName);
		bank.accBal=bank.accBal-amt;
		document.getElementById("accBal").value=bank.accBal;
		
	}
	
	function deposit(){
		var accNo=document.getElementById("accNo").value;
		var accName=document.getElementById("accName").value;
		var accBal=document.getElementById("accBal").value;
		var amt=document.getElementById("amt").value;
		var bank= new bankAccount(accNo,accBal,accName);
		bank.accBal=parseInt(bank.accBal)+parseInt(amt);
		document.getElementById("accBal").value=bank.accBal;
		
	}
	
	
/**
 * 
 */