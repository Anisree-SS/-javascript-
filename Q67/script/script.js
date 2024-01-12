function find()
{
	var text=document.getElementById("str").value;
	if((text.charAt(0)==" ")||(text==""))
		alert("invalid input!!");
	else
	{
		var ar = new Array('0','1','2','3','4','5','6','7','8','9');
		var sp = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
		var c1=c2=c3=0;
		var n=text.length;
		for(var j=0;j<n;j++)
			if(sp.test(text[j]))	
				c1++;
		for(var i=0;i<n;i++)
			for(var j=0;j<n;j++)
				if(text[i]==ar[j])
					c2++;	
		for(var k=0;k<n;k++)
			if((text.charCodeAt(k)>= 65 && text.charCodeAt(k)<= 90)||(text.charCodeAt(k)>= 97 && text.charCodeAt(k)<= 122))
				c3++;

	
		document.getElementById("demo").innerHTML="No: of special symbol in the String "+c1;
		document.getElementById("demo1").innerHTML="No: of digits in the String "+c2;
		document.getElementById("demo2").innerHTML="No: of alphabets in the String "+c3;
	}
}

	
	

	