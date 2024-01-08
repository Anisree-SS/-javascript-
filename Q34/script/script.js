function find()
{
	var a=parseInt(document.getElementById("num").value);
	if((a==0)||(a==1))
	{
		document.getElementById("demo").innerHTML = "Smallest prime number is 2";
	}
	else if(a==2)
	{
		document.getElementById("demo").innerHTML = "Its a prime number";
	}
	else
	{
		for(var i=2;i<a;i++)
		{
			if(a%i==0)
			{
				document.getElementById("demo").innerHTML = "Its not a prime number";
				break;
			}
			else
			{
				document.getElementById("demo").innerHTML = "Its a prime number";
			}
		}
	}
}
	

	

		