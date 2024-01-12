function find()
{
	var str=document.getElementById("num1").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+str.match(no);
	if((str.charAt(0)==" ")||(cal!="1")||(str==""))
		alert("invalid input!!");
	else
	{
       		var result = '';
        	for (var i = 0; i < str.length; i++) 
		{
            		var ch = str.charAt(i);
            		if (ch === ch.toUpperCase())
	   		{
                		result += ch.toLowerCase();
            		}
	   		else
	  		{
                		result += ch.toUpperCase();
            		}
       		}
        	document.getElementById("demo").innerHTML = result;
	}
 }
	

	

		