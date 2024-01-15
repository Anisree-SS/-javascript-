function find()
{
	var count=0;
	var str=document.getElementById("num").value;
	var no=/^[0-9@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+str.match(no);
	if((str.charAt(0)==" ")||(cal!="1")||(str==""))
		alert("invalid input!!");
	else
	{	
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
			document.getElementById("demo").innerHTML = "Its a palindrome string";
		else
			document.getElementById("demo").innerHTML = "Its not a palindrome string";		
	}
}
	

	

		