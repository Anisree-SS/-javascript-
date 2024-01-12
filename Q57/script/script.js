function find()
{
	var s=document.getElementById("str1").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+s.match(no);
	if((s.charAt(0)==" ")||(cal!="1")||(s==""))
		alert("invalid input!!");
	else
	{
		var n=s.length;
		var text=s.charAt(n-1);
		document.getElementById("demo").innerHTML=text;
	}
}
	

	

		