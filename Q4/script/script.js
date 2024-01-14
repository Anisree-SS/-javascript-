function add()
{
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no)+num3.match();
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2=="")||(num3.charAt(0)==" ")||(num3==""))
		alert("invalid input!!");
	else
	{	
		var n1=parseInt(num1);
		var n2=parseInt(num2);
		var n3=parseInt(num3);
		var sum= n1+n2+n3;
		var avg=sum/3;
		document.getElementById("ans1").value = sum;
		document.getElementById("ans2").value = avg;
	}
}

		