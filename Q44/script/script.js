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
		n=parseInt(num1);
		v=n*n*n;
		area=6*(n*n);
		ls=4*n*n;
		document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
		document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
		document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
	}
}
	

	

		