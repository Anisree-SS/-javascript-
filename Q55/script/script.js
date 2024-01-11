function find()
{
	var data =document.getElementById("byt").value;
	var byteString=data.split(',');
	let result = "";
	for (var i=0;i<byteString.length;i++) 
	{
    		result =result+String.fromCharCode(byteString[i]);
	}
	document.getElementById("demo").innerHTML=result	
}
	

	

		