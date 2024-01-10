function palindrome(str) 
{
	const reversed = str.split('').reverse().join('');
	return str === reversed;
}

function find() 
{
	var text=document.getElementById("str").value;
    	const words = text.split(' ');
	for (var i = 0; i < words.length; i++) 
	{
        	const txt = words[i];
        	for (let j = 0; j < txt.length; j++) 
		{
            		for (let k = j + 2; k <= txt.length; k++)
			{
                		const sub = txt.substring(j, k);
               			if (palindrome(sub)) 
				{
                    			const rep = '*'.repeat(sub.length);
                   			 words[i] = words[i].replace(sub, rep);
               			 }
            		}
       		 }
    	}

     document.getElementById("demo").innerHTML=	words.join(' ');
}
	

	

	

		