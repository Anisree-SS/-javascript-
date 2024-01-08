function find()
{
	var sum=0;
	var n=parseInt(document.getElementById("num").value);
	for(var i=1;i<=n;i++)
		if(i%2==0)
			sum=sum+i;
	document.getElementById("demo").innerHTML = "Sum of Even Numbers : "+sum;
	
}
	

	

		