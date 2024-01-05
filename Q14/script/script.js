function find()
{
	var sum=0;
	var n=parseInt(document.getElementById("num").value);
	while(n>0)
	{
		var rem=n%10;
		sum=sum+rem;
		n=parseInt(n/10);
	}
	
	document.getElementById("demo").innerHTML = "Sum of digits is : "+sum;
}
	

	

		