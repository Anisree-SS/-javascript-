function find()
{
	var area=0;
	var n=parseInt(document.getElementById("num").value);
	v=n*n*n;
	area=6*n*n;
	ls=4*n*n;
	document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
	document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
	document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
}
	

	

		