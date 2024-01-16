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
		var temp=text.charAt(0);
		var temp1=text.at(-1);
		var con="abcdefghijklmnopqrstuvwxyz";
		if(con.match(text))
			document.getElementById("demo").innerHTML="There is no missing letter!";
		else
		{
			var txt=con.split("");
			var pos=txt.indexOf(temp);
			var m=txt.indexOf(temp1);
			var t=-1;
			for(var i=pos;i<m;i++)
				if (!text.includes(txt[i]))
					document.write(txt[i]+"\t");	
		}
	}	
}

	
	

	