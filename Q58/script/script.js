function find()
{
	var s=document.getElementById("str1").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+s.match(no);
	if((s.charAt(0)==" ")||(cal!="1")||(s==""))
		alert("invalid input!!");
	else
	{
		var n=s.length;
		if(n%2==0)
		{
			alert("No perfect middle String");
			document.getElementById("demo").innerHTML=" ";
		}
		else
		{	
			var mid=parseInt(n/2);
			var text=s.charAt(mid);
			document.getElementById("demo").innerHTML=text;
		}
	}
}
	

	

		