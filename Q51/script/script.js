function find()
{
	var rev=0;
	var n=document.getElementById("num").value;
	var no=/[A-z]/;
	cal=1;
	cal=cal+n.match(no);
	if((n.charAt(0)==" ")||(cal!="1")||(n==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(n);
		var m=n;
		while(n>0)
		{
			var rem=n%10;
			rev=(rev*10)+rem;
			n=parseInt(n/10);
		}
		if(rev==m)
		{
			document.getElementById("demo").innerHTML = "Its a Palindrome Number";
		}
		else
		{
			document.getElementById("demo").innerHTML = "Its not a Palindrome Number";
		} 
	}
}
	

	

		