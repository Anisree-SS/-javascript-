function find()
{
	var text1=document.getElementById("str").value;
	var n=text1.length;
	var text=text1.split("");
	var text2=""
	var ar=new Array("a","e","i","o","u","A","E","I","O","U");
	for(var i=0;i<n;i++)
		for(var j=0;j<12;j++)
			if(ar[j]==text[i])
				text2=text2+text[i];
			else if(ar[j]==" ")
				text2=text2+"\t";
	document.getElementById("demo").innerHTML="After removing all consonents from the string  "+text2+"\n";
}

	
	

	