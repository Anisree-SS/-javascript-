function find()
{
	var sum=0,avg;
	var n=parseInt(document.getElementById("num").value);
	for(var i=1;i<=n;i++)
		sum=sum+i;
	avg=sum/n;
	document.getElementById("demo").innerHTML = "Sum of Natural Numbers : "+sum;
	document.getElementById("demo1").innerHTML = "Average of Natural Numbers : "+avg;
}
	

	

		