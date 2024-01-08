function find()
{
	var sum=0,sum1=0;
	var n=parseInt(document.getElementById("num").value);
	for(var i=1;i<=n;i++)
		if(i%2==0)
			sum=sum+i;
		else
			sum1=sum1+i;
	document.getElementById("demo").innerHTML = "Sum of Even Numbers : "+sum;
	document.getElementById("demo1").innerHTML = "Sum of Odd Numbers : "+sum1;
	
}
	

	

		