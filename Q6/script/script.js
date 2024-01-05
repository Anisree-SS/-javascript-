function add()
{
	var p=parseFloat(document.getElementById("num1").value);
	var r=parseFloat(document.getElementById("num2").value);
	var t=parseInt(document.getElementById("num3").value);
	var rate=((1+r)/100);
	rate=Math.pow(rate,t);
	var amt=p*rate;
	var ci=-(amt-p);
	document.getElementById("ans").value = ci;
}
	

		
