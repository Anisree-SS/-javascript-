function find()
{
	var area=0;
	var r=parseInt(document.getElementById("num").value);
	v=4*3.14*(r*r*r);
	area=4*3.14*(r*r);
	document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
	document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
	
}
	

	

		