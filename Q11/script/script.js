function find()
{
	var n=parseInt(document.getElementById("num").value);
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
	

	

		