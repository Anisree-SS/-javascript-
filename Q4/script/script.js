function add()
{
	var n1=parseInt(document.getElementById("num1").value);
	var n2=parseInt(document.getElementById("num2").value);
	var n3=parseInt(document.getElementById("num3").value);
	var sum= n1+n2+n3;
	var avg=sum/3;
	document.getElementById("sum").value = sum;
	document.getElementById("avg").value = avg;
}

		