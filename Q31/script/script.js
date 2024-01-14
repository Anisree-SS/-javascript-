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
		var pro=1,rem;
		while(n>0)
		{
			rem=n%10;
			pro=pro*rem;
			n=parseInt(n/10);
		}
		document.getElementById("ans").value=pro;
	}
}
	

	

		