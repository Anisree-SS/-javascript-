function find()
{
	var sum=0,sum1=0;
	var num1=document.getElementById("num").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		for(var i=1;i<=n;i++)
			if(i%2==0)
				sum=sum+i;
			else
				sum1=sum1+i;
		document.getElementById("demo").innerHTML = "Sum of Even Numbers : "+sum;
		document.getElementById("demo1").innerHTML = "Sum of Odd Numbers : "+sum1;
	}
	
}
	

	

		