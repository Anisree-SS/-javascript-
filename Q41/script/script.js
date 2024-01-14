function find()
{
	var sum=sum1=0,i;
	var num1=document.getElementById("num").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		if(n<=50)
		{
			for(i=1;i<=n;i++)
				sum=i*2.60;
		}
		else if((n>50)&&(n<=100))
		{	
			sum1=0;
			sum=50*2.60;
			for(i=51;i<=n;i++)
				sum1=((i-50)*3.25);
			sum=sum+sum1;
		}
		else if((n>100)&&(n<=200))
		{
			sum=0;
			sum=50*2.60;
			sum=sum+(50*3.25);
			for(i=101;i<=n;i++)
				sum1=((i-100)*5.65); 
			sum=sum+sum1;
		
		}
		else if((n>200)&&(n<=700))
		{
			sum=0;
			sum=50*2.60;
			sum=sum+(50*3.25);
			sum=sum+(100*5.65);
			for(i=201;i<=n;i++)
				sum1=((i-200)*7.25);
			sum=sum+sum1;
		}
		else
		{
			sum=0;
			sum=50*2.60;
			sum=sum+(50*3.25);
			sum=sum+(100*5.65);
			sum=sum+(500*7.25);
			for(var i=701;i<=n;i++)
				sum1=((i-700)*7.25);
			txt=sum1*(0.5/100)
			sum=sum+sum1+txt;
		}
		document.getElementById("demo").innerHTML = "units consumption :"+n;
		document.getElementById("demo1").innerHTML = "Total charges : "+sum;
	}
}
	

	

		