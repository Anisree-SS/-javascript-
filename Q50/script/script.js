function find() 
{
	var ch = parseInt(document.getElementById("opt").value);
	if(ch<5)
	{
		 var x = document.getElementById("answ1");
		 if (x.style.display === "none") 
		{
    			x.style.display = "block";
 		 } 
		else 
		{
   			 x.style.display = "none";
 		}
	}
	else if(ch==5)
		document.getElementById("demo").innerHTML="Exit";
	else
		alert("Invalid choice. Please enter a valid option.");	
}

function cal() 
{	
	var ch = parseInt(document.getElementById("opt").value);
	var num1=parseInt(document.getElementById("num1").value);
	var num2=parseInt(document.getElementById("num2").value);
	if(ch==1)
	{
		var sum = num1 + num2;
		document.getElementById("demo").innerHTML=sum;
		find();
    		
	}
	else if(ch==2)
	{
		var diff = num1 - num2;
    		document.getElementById("demo").innerHTML=diff;
		find();
	}
	else if(ch==3)
	{
		var pro = num1 * num2;
    		document.getElementById("demo").innerHTML=pro;
		find();
	}
	else if(ch==4)
	{
		var div = num1 / num2;
    		document.getElementById("demo").innerHTML=div;
		find();
	}
	
		
}

	

		