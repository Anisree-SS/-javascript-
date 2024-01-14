function add()
{
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2==""))
		alert("invalid input!!");
	else
	{	
		 n1=parseFloat(num1);
		 n2=parseFloat(num2);
		var sum=n1+n2;
		document.getElementById("ans").value = sum;
	}
}
	
function sub()
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
		 n1=parseFloat(num1);
		 n2=parseFloat(num2);
		var diff=n1-n2;
		document.getElementById("ans").value = diff;
	}
}

function mul()
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
		 n1=parseFloat(num1);
		 n2=parseFloat(num2);
		var mul=n1*n2;
		document.getElementById("ans").value = mul;
	}
}

function div()
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
		 n1=parseFloat(num1);
		 n2=parseFloat(num2);
		var div=n1/n2;
		document.getElementById("ans").value = div;
	}
}
	
	

	

		