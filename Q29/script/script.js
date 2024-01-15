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
		var p=[],t=0;
		for(var i=1;i<=n;i++)
		{
			if((i%5==0)&&(i%11==0))
			{
				p[t++]=i;
			}
		}
		if(p=="")
			document.write("There is no number divisible by 5 and 11 is upto "+n);	
		else
		document.write("Numbers divisible by 5 and 11 is : "+p);
	}	
}
	

	

		