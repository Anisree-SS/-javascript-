function find()
{
	var c=0;
	var text=document.getElementById("str").value;
	var text2=document.getElementById("ch").value;
	var n=text.length;
	for(var i=0;i<n;i++)
	{
		if(text[i]==text2)
			c++;
	}
	document.getElementById("demo").innerHTML="Occurence of a given character is : "+c;
}
	
	

	

		