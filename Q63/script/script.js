function find()
{
	var text=document.getElementById("str").value;
	var text2=document.getElementById("ch").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no)+text2.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text==""))
		alert("invalid input!!");
	else
	{
		var n=text.length;
		var t1=text.indexOf(text2);
		if(t1==0)
			document.getElementById("demo").innerHTML="Specified substring is the prefix of the given string";
		else
			document.getElementById("demo").innerHTML="Specified substring is not the prefix of the given string";
	}
}

	
	

	

		