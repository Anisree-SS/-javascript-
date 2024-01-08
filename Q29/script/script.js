function find()
{
	var n=parseInt(document.getElementById("num1").value);
	document.write("Numbers divisible by 5 and 11 is : ");
	for(var i=1;i<=n;i++)
	{
		if((i%5==0)&&(i%11==0))
		{
			document.write(i+"\t\t");
		}
	}
	
}
	

	

		