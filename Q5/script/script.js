function add()
{
	var p=parseInt(document.getElementById("num1").value);
	var r=parseInt(document.getElementById("num2").value);
	var t=parseInt(document.getElementById("num3").value);
	var interest=(p*r*t)/100;
	document.getElementById("ans").value = interest;
}
	

		