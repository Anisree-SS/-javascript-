function find()
{
	var rev=0;
	var n=parseInt(document.getElementById("num").value);
	while(n>0)
	{
		var rem=n%10;
		rev=(rev*10)+rem;
		n=parseInt(n/10);
	}
	
	document.getElementById("demo").innerHTML = "Reverse of the number is :  "+rev;
}
	

	

		