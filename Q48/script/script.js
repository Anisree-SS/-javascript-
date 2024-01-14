function find()
{
	var rev=0,count=0;
	var num1=document.getElementById("num").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		n=parseInt(num1);
		while(n>0)
		{
			n=parseInt(n/10);
			count++;
		}
	
		document.getElementById("demo").innerHTML = "Number of  Digits : "+count;
	}
}
	

	

		