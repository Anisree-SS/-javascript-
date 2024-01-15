function find()
{
	var num1=document.getElementById("num1").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	num1=num1.trim();
	cal=1;
	cal=cal+num1.match(no);
	if((cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		var last=n%10;
		if(last<0)
			last=-(last);
		document.getElementById("ans1").value =last;
		if(n<0)
		{
			n=-(n);
			while(n>0)
			{
				if(n<10)
				{
					document.getElementById("ans").value ="-"+n;
					break;
				}
				n=parseInt(n/10);
		
			}
		
		}
		else
		{
			while(n>0)
			{
				if(n<10)
				{
					document.getElementById("ans").value =n;
					break;
				}
				n=parseInt(n/10);
		
			}
		}
	}
		
}
	

	

		