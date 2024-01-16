function find()
{
	var sum=0;
	var num1=document.getElementById("num").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		if(n<=10000)
		{
			hra=n*0.08;
			da=n*0.1;
			sum=n+hra+da;
		}		
		else if((n>10000)&&(n<=20000))
		{
			hra=n*0.16;
			da=n*0.2;
			sum=n+hra+da;
		}
		else
		{
			hra=n*0.24;
			da=n*0.3;
			sum=n+hra+da;
		}
		document.getElementById("demo").innerHTML = "Gross Salary : "+sum;
	}
	
}
	

	

		