function find()
{
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2==""))
		alert("invalid input!!");
	else
	{	
		a=parseInt(num1);
		b=parseInt(num2);
		a=a+b;
		b=a-b;
		a=a-b;
		document.getElementById("demo").innerHTML = "After swapping first number is "+a+" and second number is  "+b;
	}
}
	

	

		