function find()
{
	var text=document.getElementById("str").value;
	var text1=document.getElementById("str1").value;
	var text2=document.getElementById("ch").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no)+text1.match(no)+text2.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text=="")||(text1.charAt(0)==" ")||(text1=="")||(text2.charAt(0)==" ")||(text2==""))
		alert("invalid input!!");
	else
	{
		var txt=text.split(" ");
		for(var i=0;i<txt.length;i++)
		{
			if(txt[i]==text1)
				txt[i]=text2;
		}
		document.getElementById("demo").innerHTML=txt.join(' ');
	}
}

	
	

	