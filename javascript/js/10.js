function descending(){
	var array = [72,97,33,56,88];
	var c,d,swap;
	 
	 
	    for (c = 0; c < 4; c++) {
	      for (d = 0; d <3; d++) {
	        if (array[d] > array[d+1]) 
	        {
	          swap       = array[d];
	          array[d]   = array[d+1];
	          array[d+1] = swap;
	        }
	      }
	    }
	   document.write("Sorted list of numbers");
	    
	    for (c = 0; c < 5; c++) 
	    	  document.write(array[c]+" ***");
}
function ascending(){
	var array = [7,9,33,56,88];
	var c,d,swap;
	 

	    for (c = 0; c < 4; c++) {
	      for (d = 0; d <3; d++) {
	        if (array[d] >array[d+1]) 
	        {
	          swap       = array[d];
	          array[d]   = array[d+1];
	          array[d+1] = swap;
	        }
	      }
	    }
	   document.write("Sorted list of numbers");
	    
	    for (c = 0; c < 5; c++) 
	    	  document.write(array[c]+" ***");
	    
	  }
/**
 * 
 */