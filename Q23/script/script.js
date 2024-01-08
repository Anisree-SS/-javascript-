function find()
{
	var n=parseFloat(document.getElementById("num1").value);
	for(var i=1;i<=n;i++)
	{
		if(n%i==0)
			document.write(i+",\t");
	}
}
	

	

		