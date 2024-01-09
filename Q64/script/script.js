function find()
{
	var text=document.getElementById("str").value;
	var text1=document.getElementById("str1").value;
	var text2=document.getElementById("ch").value;
	var text3=text.replaceAll(text1,text2);
	document.getElementById("demo").innerHTML=text3;
}

	
	

	