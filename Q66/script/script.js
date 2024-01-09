function find()
{
	var text=document.getElementById("str").value;
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
	document.getElementById("demo").innerHTML="New string "+t.join("");
}

	
	

	