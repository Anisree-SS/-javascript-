function add()
{
	var num1 =document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var no=/^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no)+num2.match(no)+num3.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1=="")||(num2.charAt(0)==" ")||(num2=="")||(num3.charAt(0)==" ")||(num3==""))
		alert("invalid input!!");
	else
	{	
		p=parseFloat(num1);
		r=parseFloat(num2);
		t=parseFloat(num3);
		var rate=((1+r)/100);
		rate=Math.pow(rate,t);
		var amt=p*rate;
		var ci=-(amt-p);
		document.getElementById("ans").value = ci;
	}
}
	

		
