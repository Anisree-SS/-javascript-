function palindrome(str) 
{
	return str == str.split('').reverse().join('');
}

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
    		var word=text.split(' ');
		for (var i = 0; i < word.length; i++) 
		{
         		if (palindrome(word[i])) 
			{
                 	 	if(word[i].length>1)
				{
					var n=word[i].length;
					var rep='*'.repeat(n);
                   			 word[i]=rep;
				}
				
       			 }
		}

     		document.getElementById("demo").innerHTML=word.join(' ');
	}
}
	

	

	

		
