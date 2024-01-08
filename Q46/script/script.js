function find()
{
	var area=0;
	var r=parseInt(document.getElementById("num").value);
	var h=parseInt(document.getElementById("num1").value);
	v=3.14*(r*r)*h;
	area=(2*3.14*(r*r))+(2*3.14*r*h);
	ls=2*3.14*h*r;
	document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
	document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
	document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
}
	

	

		