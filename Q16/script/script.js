function find()
{
	var rev=0;
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	var c=parseInt(document.getElementById("num3").value);
	if((a<b)&&(a<c))
	{
		document.getElementById("small").innerHTML = "Smallest number is :  "+a;
	}
	else if((b<a)&&(b<c))
	{
		document.getElementById("small").innerHTML = "Smallest number is :  "+b;
	}
	else
	{
		document.getElementById("small").innerHTML = "Smallest number is :  "+c;
	}
	if((a>b)&&(a>c))
	{
		document.getElementById("large").innerHTML = "Largest number is :  "+a;
	}
	else if((b>a)&&(b>c))
	{
		document.getElementById("large").innerHTML = "Largest number is :  "+b;
	}
	else
	{
		document.getElementById("large").innerHTML = "Largest number is :  "+c;
	}
	
	
}
	

	

		