function find()
{
	var n=parseInt(document.getElementById("num1").value);
	var a=0,b=1;
	document.write(a+"\t\t\t"+b);
	for(i=3;i<n;i++)
	{
		c=a+b;
		document.write(c+"\t\t\t");
		a=b;
		b=c;
	}
}
	

	

		