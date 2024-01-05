function add()
{
	var n1=parseInt(document.getElementById("num1").value);
	var n2=parseInt(document.getElementById("num2").value);
	var n3=parseInt(document.getElementById("num3").value);
	var sum= n1+n2+n3;
	var avg=sum/3;
	document.getElementById("ans1").value = sum;
	document.getElementById("ans2").value = avg;
}

		