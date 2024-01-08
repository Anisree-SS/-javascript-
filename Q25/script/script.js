function find()
{
	var n=parseFloat(document.getElementById("num1").value);
	var last=n%10;
		document.getElementById("ans1").value =last;
	while(n>0)
	{
		if(n<10)
		{
			document.getElementById("ans").value =n;
			break;
		}
		n=parseInt(n/10);
	}
		
}
	

	

		