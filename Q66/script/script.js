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
		var ar = new Array ("a","e","i","o","u");
		var ar1=[];
		for(var i=0;i<n;i++)
		{
			for(var j=0;j<n;j++)
			{
				if(text[i]==ar[j])
				{
					ar1[i]=text[i];	
				}
			}
		}	
		var t=ar1.toReversed();
		if(t=='')
			document.getElementById("demo").innerHTML="There is no vowels";
		else
			document.getElementById("demo").innerHTML="New string "+t.join("");
	}
}

	
	

	