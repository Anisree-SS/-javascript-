function find()
{
	
	var txt=document.getElementById("str").value;
	var n=txt.length;
	var text=txt.split("");
	for(var i=0;i<n;i++)
	{
		var count=0;
		for(var j=0;j<n;j++)
		{
			if(txt[i]==text[j])
			{
				count++;
				if(txt[i++].includes(text[i])
					delete txt[i];
				
			}
		}
		document.write(text1[i]+"="+count+"\t");
	}
document.write(text1);
}

	
	

	