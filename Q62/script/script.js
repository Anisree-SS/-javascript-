function find()
{
	var c=0;
	var text=document.getElementById("str").value;
	var text2=document.getElementById("ch").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no)+text2.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text=="")||(text2.charAt(0)==" ")||(text2==""))
		alert("invalid input!!");
	else
	{
		var c=0;
		var n=text.length;
		for(var i=0;i<n;i++)
		{
			if(text[i]==text2)
				c++;
		}
		if(c==-1)
			document.getElementById("demo").innerHTML="Given character is not in the string";
		else
			document.getElementById("demo").innerHTML="Occurence of a given character is : "+c;
	}
}
	
	

	

		