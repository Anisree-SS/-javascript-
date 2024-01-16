function find()
{
	var num1=document.getElementById("mark1").value;
	var num2=document.getElementById("mark2").value;
	var num3=document.getElementById("mark3").value;
	var num4=document.getElementById("mark4").value;
	var num5=document.getElementById("mark5").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no)+num3.match(no)+num4.match(no)+num5.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2=="")||(num3.charAt(0)==" ")||(num3=="")||(num4.charAt(0)==" ")||(num4=="")||(num5.charAt(0)==" ")||(num5==""))
		alert("invalid input!!");
	else
	{
		var m1=parseInt(num1);
		var m2=parseInt(num2);
		var m3=parseInt(num3);
		var m4=parseInt(num4);
		var m5=parseInt(num5);
		if((m1 >= 65 && m2 >= 55 && m3 >= 50 && m4 >= 190) ||(m5 >= 140))
		{
			document.getElementById("demo").innerHTML = "The candidate is eligible";
		}
		else
		{
			document.getElementById("demo").innerHTML = "The candidate is not eligible";
		}
	}
}
				
		