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
		var n=parseInt(num1);
		if(n%400==0){
			document.getElementById("demo").innerHTML = "Its a leap year";
		}
		else if(n%100==0){
			document.getElementById("demo").innerHTML = "Its no a leap year";
		}
		else if(n%4==0){
			document.getElementById("demo").innerHTML = "Its a leap year";
		}
		else {
			document.getElementById("demo").innerHTML = "Its no a leap year";
		}
	}
	
}
	

	

		