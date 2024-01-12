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
		var n=text.length;
		var ar = new Array ("a","e","i","o","u");
		var con=new Array("b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z");
		var c=v=0;
		for(var i=0;i<n;i++)
		{
			for(var j=0;j<22;j++)
			{
				if(text[i]==ar[j])
				{
					v++;

				}		
				else if(text[i]==con[j])
				{
					c++;
				}
				else
					continue;
	
			}
		
		}	
		document.getElementById("demo").innerHTML="No: of vowels "+v;
		document.getElementById("demo1").innerHTML="No: of consonents "+c;
	}
}

	
	

	