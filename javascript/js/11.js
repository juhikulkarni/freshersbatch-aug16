
function vow(form)
    {
     alert("hello");
     var a = new Array(10);
     a = form.t1.value;
     var flag = 0;
     var i;

     for(i=0;i<10;i++)
       {
     switch (a[i])
      {
       case 'a':
       flag++;
       break;

       case 'e':
       flag++;
       break;

       case 'i':
       flag++;
       break;

       case 'o':
       flag++;
       break;

       case 'u':
       flag++;
       break;
      }
      }
  alert(flag);  
  }
/**
 * 
 */