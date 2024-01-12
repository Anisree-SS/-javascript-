function find()
{
	var text=document.getElementById("str").value;
	var text2=document.getElementById("ch").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no)+text2.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text=="")||(text2.charAt(0)==" ")||(text2==""))
		alert("invalid input!!");
	else
	{
		var m=text.indexOf(text2);
		if(m==-1)
			document.getElementById("demo").innerHTML="Specified character is Not in the string ";
		else
			document.getElementById("demo").innerHTML="Index of specified character is  "+m;
	}
}
	
	

	

		