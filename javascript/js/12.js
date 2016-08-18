
		
		function palindrome_checker()
		{
			var strings = document.getElementById('userInput').value;
			var orignal_word;
			var reverse_word = strings;
			
			strings = strings.toLowerCase();
			orignal_word = strings;
		strings = strings.split(''); 
			strings = strings.reverse(); 
			strings = strings.join(''); 
			 reverse_word = strings;
	 	if(orignal_word == reverse_word)
	 	{
				document.write( "A PALINDROME"); 
			} 
	 	else
			{
	 		document.write( " NOT A PALINDROME"); 
			}
		}
		
		