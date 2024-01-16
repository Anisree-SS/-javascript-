function find()
{
	var text1=document.getElementById("str").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+text1.match(no);
	if((text1.charAt(0)==" ")||(cal!="1")||(text1==""))
		alert("invalid input!!");
	else{

		var n=text1.length;
		var text=text1.split("");
		var text2=""
		var ar=new Array("a","e","i","o","u","A","E","I","O","U");
		for(var i=0;i<n;i++)
			for(var j=0;j<12;j++)
				if(ar[j]==text[i])
					text2=text2+text[i];
				else if(ar[j]==" ")
					text2=text2+"\t";
		if(text2=="")
			document.getElementById("demo").innerHTML="There is no vowels<br>"
		else
			document.getElementById("demo").innerHTML="After removing all consonents from the string \n "+text2;
	}
}

	
	

	