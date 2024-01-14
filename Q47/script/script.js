function find()
{
	var area=0;
	var num1=document.getElementById("num").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		var r=parseInt(num1);
		v=4*3.14*(r*r*r);
		area=4*3.14*(r*r);
		document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
		document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
	}
}
	

	

		