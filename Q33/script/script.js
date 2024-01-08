function find()
{
	var n=parseInt(document.getElementById("num").value);
	var sum=0;
	for(var i=1;i<n;i++)
	{
		if(n%i==0)
		{
			sum=sum+i;
		}
	}
	if(sum==n)
	{
		document.getElementById("demo").innerHTML = "Its a Perfect Number";
	}
	else
	{
		document.getElementById("demo").innerHTML = "Its not a Perfect Number";
	}	
				
}
	

	

		