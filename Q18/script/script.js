function find()
{
	var m1=parseInt(document.getElementById("mark1").value);
	var m2=parseInt(document.getElementById("mark2").value);
	var m3=parseInt(document.getElementById("mark3").value);
	var m4=parseInt(document.getElementById("mark4").value);
	var m5=parseInt(document.getElementById("mark5").value);
	if((m1 >= 65 && m2 >= 55 && m3 >= 50 && m4 >= 190) ||(m5 >= 140))
	{
		document.getElementById("demo").innerHTML = "The candidate is eligible";
	}
	else
	{
		document.getElementById("demo").innerHTML = "The candidate is not eligible";
	}
}
				
		