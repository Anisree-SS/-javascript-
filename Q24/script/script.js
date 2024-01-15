function find()
{
	var fact=1;
	var num1=document.getElementById("num1").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		if((n==0)||(n==1))
		{
			document.getElementById("ans").value = "1";
		}
		else
		{
			for(var i=1;i<=n;i++)
			{
				fact=fact*i;
			}
			document.getElementById("ans").value = fact;
		}
	}
}
	

	

		