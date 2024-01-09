function find()
{
	var area=0;
	var h=parseInt(document.getElementById("num1").value);
	var l=parseInt(document.getElementById("num2").value);
	var r=parseInt(document.getElementById("num3").value);
	area=(3.14*r*l)+(3.14*(r*r));
	v=(1/3)*3.14*(r*r)*h;
	ls=3.14*r*l;
	document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
	document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
	document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
}
	

	

		