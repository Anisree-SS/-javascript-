function find()
{
	var sum=0,avg;
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
			sum=sum+i;
		avg=sum/n;
		document.getElementById("demo").innerHTML = "Sum of Natural Numbers : "+sum;
		document.getElementById("demo1").innerHTML = "Average of Natural Numbers : "+avg;
	}
}
	

	

		