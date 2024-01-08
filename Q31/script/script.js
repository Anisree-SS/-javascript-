function find()
{
	var n=parseInt(document.getElementById("num1").value);
	var pro=1,rem;
	while(n>0)
	{
		rem=n%10;
		pro=pro*rem;
		n=parseInt(n/10);
	}
	document.getElementById("ans").value=pro;
}
	

	

		