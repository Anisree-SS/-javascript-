function find()
{
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	a=a+b;
	b=a-b;
	a=a-b;
	document.getElementById("demo").innerHTML = "After swapping first number is "+a+" and second number is  "+b;
}
	

	

		