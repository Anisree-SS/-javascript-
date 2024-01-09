function find()
{
	var text1;
	var text=document.getElementById("str").value;
	var n=text.length;
	var l=text.at(-1);
	var m=text.lastIndexOf(l);
	m=m+1;
	document.getElementById("demo").innerHTML="length using length() :"+n;
	document.getElementById("demo1").innerHTML="length using length() :"+m;
}
	

	

		