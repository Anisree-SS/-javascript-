function find()
{
	var num1=document.getElementById("num1").value;
	var no=/[A-z]/;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		var a=0,b=1;
		document.write(a+"\t\t\t"+b);
		for(i=2;i<n;i++)
		{
			c=a+b;
			document.write("\t\t"+c+"\t\t\t");
			a=b;
			b=c;
		}
	}
}
	

	

		