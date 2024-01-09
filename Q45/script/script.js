function find()
{
	var area=0;
	var h=parseInt(document.getElementById("num1").value);
	var l=parseInt(document.getElementById("num2").value);
	var w=parseInt(document.getElementById("num3").value);
	area=(2*l*w)+(2*l*h)+(2*w*h);
	v=l*w*h;
	ls=(2*h)*(l+w);
	document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
	document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
	document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
}
	

	

		