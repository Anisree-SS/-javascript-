function find()
{
	var occ={};
	var txt=document.getElementById("str").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+txt.match(no);
	if((txt.charAt(0)==" ")||(cal!="1")||(txt==""))
		alert("invalid input!!");
	else
	{
		var n=txt.length;
		var count = {};
		var str=[];
		var k=0;
		var max=1;
            	for (var i = 0; i < n; i++) 
		{
			if(txt[i]==" ")
				continue;
			else
				var char = txt[i];
			if (count[char] === undefined)
					count[char] = 1;
			else 
			{
                   		count[char]++;
				if(max<=count[char])
				{
					if(str.includes(char))
						continue;
					else
						str[++k]=char;
					max=count[char];
				}
			}
               
            	}
            for (var char in count) 
                document.write("<br>"+char +" =  "+count[char]+"\t");
	
	document.write("<br> Alphabet with maximum occurrence is "+str);
	
        }
}
	

	
	

	