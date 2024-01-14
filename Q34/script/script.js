function find()
{
	var num1=document.getElementById("num").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		a=parseInt(num1);
		if((a==0)||(a==1))
		{
			document.getElementById("demo").innerHTML = "Its not a prime number";
		}
		else if(a==2)
		{
			document.getElementById("demo").innerHTML = "Its a prime number";
		}
		else
		{
			for(var i=2;i<a;i++)
			{
				if(a%i==0)
				{
					document.getElementById("demo").innerHTML = "Its not a prime number";
					break;
				}
				else
				{
					document.getElementById("demo").innerHTML = "Its a prime number";
				}
			}
		}
	}
}
	

	

		