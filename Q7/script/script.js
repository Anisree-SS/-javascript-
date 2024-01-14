function add()
{
	
	var num1=document.getElementById("num1").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		 r=parseFloat(num1);
		var a=3.14*(r*r);
		document.getElementById("ans").value = a;
	}
}
	

		
