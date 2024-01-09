function find()
{
	var text=document.getElementById("str").value;
	var text2=document.getElementById("ch").value;
	var n=text.length;
	var t1=text.indexOf(text2);
	if(t1==0)
	{
		document.getElementById("demo").innerHTML="Specified substring is the prefix of the given string";
	}
	else
		document.getElementById("demo").innerHTML="Specified substring is not the prefix of the given string";
}

	
	

	

		