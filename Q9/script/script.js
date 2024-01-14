function cube()
{
	var num1=document.getElementById("num1").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		var n1=parseFloat(num1);
		var c=n1*n1*n1;
		document.getElementById("ans").value = c;
	}
}
	

	

		