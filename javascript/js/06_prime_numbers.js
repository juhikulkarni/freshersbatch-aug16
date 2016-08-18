function primeNumbers()
{
	var n1= document.getElementById("number1").value;
	var n2= document.getElementById("number2").value;
	
	 for(var i = n1; i <= n2; i++)
     {
         for (var k = n1; k <= n2; k++)
         {
             if (i == k)
             {
                 continue;
             }
             else if (i % k == 0)
             {
                 flag = false;
                 break;
             }
             else
             {
                 flag = true;
             }
         }

         if (flag)
         {
        	 document.write(j +"********************");   
         }
     }
	
}