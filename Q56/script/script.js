function find()
{
	var s=document.getElementById("str1").value;
	s=s.trim();
	var no=/[0-9]/g;
	cal=1;
	cal=cal+s.match(no);
	if((cal!="1")||(s==""))
		alert("invalid input!!");
	else
	{
		var text=s.charAt(0);
		document.getElementById("demo").innerHTML=text;
	}
}
	

	

		