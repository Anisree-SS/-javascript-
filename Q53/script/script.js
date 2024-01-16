function find()
{
	var text1;
	var text=document.getElementById("str").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text==""))
		alert("invalid input!!");
	else
	{
		var n=text.length;
		for(var i=0;i<n;i++)
		{
			if(text[i]==" ")
				continue;
			else
			{
				text1=text.charCodeAt(i);
				document.write(text1+"\t");
			}
		}
	}
}
	

	

		