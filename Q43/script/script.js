function find()
{
	var area=0;
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		h=parseInt(num1);
		l=parseInt(num2);
		r=parseInt(num3);
		area=(3.14*r*l)+(3.14*(r*r));
		v=(1/3)*3.14*(r*r)*h;
		ls=3.14*r*l;
		document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
		document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
		document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
	}
}
	

	

		