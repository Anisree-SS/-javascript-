function find()
{
	var text=document.getElementById("str").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text.match(no);
	if((text.charAt(0)==" ")||(cal!="1")||(text==""))
		alert("Invalid Input!!");
	else
	{
		var n=text.length;
		var sub= text.split(" ");
		var max=sub[0].length;
		var min=sub[0].length;
		var small=sub[0];
		var large=sub[0];
		for(var i=1;i<sub.length;i++)
		{
			var n=sub[i].length;
			if(min>=n)
			{
				if(min>n)
				{
					small="";
					small=sub[i];
				}
				else
					small=small+"\t"+sub[i];
				min=n;
			}
			if(max<=n)
			{
				if(max<n)
				{
					large="";
					large=sub[i];
				}
				else
					large=large+"\t"+sub[i];
				max=n;
			}
		}
		document.getElementById("demo").innerHTML="Smallest word in the string "+small;
		document.getElementById("demo1").innerHTML="Largest word in the string "+large;
	}
}

	
	

	