function find()
{
	var count=0;
	var str=document.getElementById("num").value;
	var text=str.split(""); 
	var txt=text.reverse();
	var n=str.length;
	for(var i=0;i<n;i++)
		if(text[i]!=txt[n-i-1])
		{
			count=1;
			break;
		}
		else
			count=0	
	if(count==0)
		;
	else
		document.getElementById("demo").innerHTML = "Its not a palindrome string";	
}
	

	

		