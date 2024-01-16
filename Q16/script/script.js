function find()
{
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no)+num3.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2=="")||(num3.charAt(0)==" ")||(num3==""))
		alert("invalid input!!");
	else
	{	
		var a=parseInt(num1);
		var b=parseInt(num2);
		var c=parseInt(num3);
		if((a<=b)&&(a<=c))
		{
			document.getElementById("small").innerHTML = "Smallest number is :  "+a;
		}
		else if((b<=a)&&(b<=c))
		{
			document.getElementById("small").innerHTML = "Smallest number is :  "+b;
		}
		else
		{
			document.getElementById("small").innerHTML = "Smallest number is :  "+c;
		}
		if((a>=b)&&(a>=c))
		{
			document.getElementById("large").innerHTML = "Largest number is :  "+a;
		}
		else if((b>=a)&&(b>=c))
		{
			document.getElementById("large").innerHTML = "Largest number is :  "+b;
		}
		else
		{
			document.getElementById("large").innerHTML = "Largest number is :  "+c;
		}
	}	
	
}
	

	

		