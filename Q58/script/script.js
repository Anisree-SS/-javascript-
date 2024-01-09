function find()
{
	var s=document.getElementById("str1").value;
	var n=s.length;
	if(n%2==0)
	{
		alert("No perfect middle String");
	}
	else
	{	
		var mid=parseInt(n/2);
		var text=s.charAt(mid);
		document.getElementById("demo").innerHTML=text;
	}
}
	

	

		