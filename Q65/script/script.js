function find()
{
	var str=document.getElementById("num1").value;
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
	

	

		