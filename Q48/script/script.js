function find()
{
	var rev=0,count=0;
	var n=parseInt(document.getElementById("num").value);
	while(n>0)
	{
		n=parseInt(n/10);
		count++;
	}
	
	document.getElementById("demo").innerHTML = "Number of  Digits : "+count;
}
	

	

		