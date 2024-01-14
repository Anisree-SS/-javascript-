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
		var last=n%10;
		document.getElementById("ans1").value =last;
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
	

	

		