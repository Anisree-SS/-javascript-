function find()
{
	var text=document.getElementById("str").value;
	var n=text.length;
	var sub= text.split(" ");
	var max=sub[0].length;
	var min=sub[0].length;
	for(var i=0;i<sub.length;i++)
	{
		var n=sub[i].length;
		if(min>=n){
			min=n;
			var posS=i;
		}
		if(max<=n){
			max=n;
			var posL=i;
		}
	}
	document.getElementById("demo").innerHTML="Smallest word in the string "+sub[posS];
	document.getElementById("demo1").innerHTML="Largest word in the string "+sub[posL];
}

	
	

	