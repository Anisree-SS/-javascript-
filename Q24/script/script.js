function find()
{
	var fact=1;
	var n=parseFloat(document.getElementById("num1").value);
	if((n==0)||(n==1))
	{
		document.getElementById("ans").value = "1";
	}
	else
	{
		for(var i=1;i<=n;i++)
		{
			fact=fact*i;
		}
		document.getElementById("ans").value = fact;
	}
}
	

	

		