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
		var c=Math.pow(a,b);
		document.getElementById("demo").innerHTML = "power is : "+c;
	}
}
	

	

		