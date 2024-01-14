function find()
{
	var area=0;
	var num1=document.getElementById("num").value;
	var num2=document.getElementById("num1").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2==""))
		alert("invalid input!!");
	else
	{	
		var r=parseInt(num1);
		var h=parseInt(num2);
	
		v=3.14*(r*r)*h;
		area=(2*3.14*(r*r))+(2*3.14*r*h);
		ls=2*3.14*h*r;
		document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
		document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
		document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
	}
}
	

	

		