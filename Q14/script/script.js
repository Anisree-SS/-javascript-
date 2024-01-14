function find()
{
	var num1=document.getElementById("num").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		var sum=0;
		n=parseInt(num1);
		while(n>0)
		{
			var rem=n%10;
			sum=sum+rem;
			n=parseInt(n/10);
		}
	
		document.getElementById("demo").innerHTML = "Sum of digits is : "+sum;
	}
}
	

	

		