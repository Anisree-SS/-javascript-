function find()
{
	var rev=0;
	var num1=document.getElementById("num").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		var n=parseInt(num1);
		while(n>0)
		{
			var rem=n%10;
			rev=(rev*10)+rem;
			n=parseInt(n/10);
		}
	
		document.getElementById("demo").innerHTML = "Reverse of the number is :  "+rev;
	}
}
	

	

		