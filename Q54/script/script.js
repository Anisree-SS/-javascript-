function find()
{
	var s=document.getElementById("str1").value;
	var s1=document.getElementById("str2").value;
	var no=/[0-9]/g;
	cal=1;
	cal=cal+s.match(no)+s1.match(no);
	if((s.charAt(0)==" ")||(cal!="1")||(s=="")||(s1.charAt(0)==" ")||(s1==""))
		alert("invalid input!!");
	else
	{
		var text=s.concat("",s1);
		document.getElementById("demo").innerHTML=text;
	}
}
	

	

		