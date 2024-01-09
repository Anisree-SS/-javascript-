function find()
{
	var text1;
	var text=document.getElementById("str").value;
	var n=text.length;
	for(var i=0;i<n;i++)
	{
		if(text[i]==" ")
			continue;
		else
		{
			text1=text[i];
			document.write(text1+",");
		}
	}
}
	

	

		