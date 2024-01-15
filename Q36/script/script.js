function find() 
{
	var sum=0;
	var num1=document.getElementById("amt").value;
	var no=/^[A-z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
	cal=1;
	cal=cal+num1.match(no);
	if((num1.charAt(0)==" ")||(cal!="1")||(num1==""))
		alert("invalid input!!");
	else
	{	
		var amount=parseInt(num1);
		const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
		var n=notes.length;
	    	const noCount=[];
    		for (var i=0;i<n;i++) 
		{
       		 	var count = parseInt(amount/notes[i]);
        		if (count>0)
			{
            			noCount[i] = count;
            			amount=amount%notes[i];
				document.write("<br>"+notes[i]+" = "+noCount[i]);
        		}
			else
				noCount[i]=0;
	    	}
		for(var j=0;j<noCount.length;j++) 
    			sum=sum+noCount[j];
   		document.write("<br>No: of notes : "+sum);
	}
}

