function vowelOrNot(){
	var alphabet= document.getElementById("alphabet").value;
	switch(alphabet){
	case 'a':
		document.write(alphabet + "is a vowel");
		break;
	case 'e':
		document.write(alphabet +"is a vowel");
		break;
	case 'i':
		document.write("it is a vowel");
		break;
	case 'o':
		document.write("it is a vowel");
		break;
	case 'u':
		document.write("it is a vowel");
		break;
		default : 
			document.write("it is not a vowel");
	}
}/**
 * 
 */