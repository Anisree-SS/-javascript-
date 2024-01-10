function find()
{
	var text=document.getElementById("str").value;
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
		for(var i=pos;i<=m-1;i++)
			if((txt[i]==text[++t]))
			{	

				continue;
			}	
			else{
				document.write(txt[i]+"\t");
			}
	}	
}

	
	

	