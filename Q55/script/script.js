function find()
{
	var data =document.getElementById("byt").value;
	var no=/[A-z]/g;
	cal=1;
	cal=cal+data.match(no);
	if((data.charAt(0)==" ")||(cal!="1")||(data==""))
		alert("invalid input!!");
	else
	{
		var byteString=data.split(' ');
		if((byteString>=97&&byteString<=122)||((byteString>=67&&byteString<=90)))
		{
			
			let result = "";
			for (var i=0;i<byteString.length;i++) 
			{
    				result =result+String.fromCharCode(byteString[i]);
			}
			document.getElementById("demo").innerHTML=result;
		}
		else	
			alert("Enetr String byte !!");
	}	
}
	

	

		