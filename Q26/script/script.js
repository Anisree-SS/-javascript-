function find()
{
	var num1=document.getElementById("num1").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		for(var i=1;i<11;i++)
		{	
			pro=n*i;
			document.write("<br>"+i+"\t*\t"+n+"\t=\t"+pro);
		}
	}
}
	

	

		