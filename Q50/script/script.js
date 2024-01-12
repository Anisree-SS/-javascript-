function find() 
{
	var ch = parseInt(document.getElementById("opt").value);
	if(ch<5)
	{
		 var x = document.getElementById("answ1");
		 if (x.style.display == "none") 
		{
    			x.style.display = "block";
 		 } 
		else 
		{
   			 x.style.display = "none";
 		}
	}
	else if(ch==5)
	{
		document.getElementById("demo").innerHTML="Exit";
		const myTimeout = setTimeout(demos, 1000);
	}
	else
		alert("Invalid choice. Please enter a valid option.");	
}

function cal() 
{	
	var ch = parseInt(document.getElementById("opt").value);
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var no=/[A-z]/;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2==""))
		alert("invalid input!!");
	else
	{	
		n1= parseInt(num1);
		n2= parseInt(num2);
		if(ch==1)
		{
			var sum = n1 + n2;
			document.getElementById("demo").innerHTML=sum;
		}
		else if(ch==2)
		{
			var diff = n1 - n2;
    			document.getElementById("demo").innerHTML=diff;
		}
		else if(ch==3)
		{
			var pro = n1 * n2;
    			document.getElementById("demo").innerHTML=pro;
		}
		else if(ch==4)
		{
			var div = n1 / n2;
    			document.getElementById("demo").innerHTML=div;
		}
	}
	clear();	
	find();		
}

function clear()
{
	document.getElementById("num1").value="";
	document.getElementById("num2").value="";
	const myTimeout = setTimeout(demos, 1000);	
}

function demos()
{
	document.getElementById("demo").innerHTML="";
}
	

		