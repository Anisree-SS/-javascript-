function add()
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
		var p=parseInt(num1);
		var r=parseInt(num2);
		var t=parseInt(num3);
		var interest=(p*r*t)/100;
		document.getElementById("ans").value = interest;
	}
}
	

		