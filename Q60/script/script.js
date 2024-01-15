function find()
{
	var text=document.getElementById("str").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text==""))
		alert("invalid input!!");
	else
	{
		var n=text.length;
		var l=text.at(-1);
		var m=text.lastIndexOf(l);
		m=m+1;
		document.getElementById("demo").innerHTML="length using length() :"+n;
		document.getElementById("demo1").innerHTML="length  with outusing length() :"+m;
	}
}
	

	

		