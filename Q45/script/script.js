function find()
{
	var area=0;
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no)+num3.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2=="")||(num3.charAt(0)==" ")||(num3==""))
		alert("invalid input!!");
	else
	{	
		h=parseInt(num1);
		l=parseInt(num2);
		w=parseInt(num3);
		area=(2*l*w)+(2*l*h)+(2*w*h);
		v=l*w*h;
		ls=(2*h)*(l+w);
		document.getElementById("demo").innerHTML = "Total Surface Area of a Cube: "+area;
		document.getElementById("demo1").innerHTML = "Volume of a Cube: "+v;
		document.getElementById("demo2").innerHTML = "Lateral Surface Area of a Cube : "+ls;	
	}
}
	

	

		