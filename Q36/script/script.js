function find() 
{
	var sum=0;
	var amount=parseInt(document.getElementById("amt").value);
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
        	}
		else
			noCount[i]=0;
    	}
	for(var j=0;j<noCount.length;j++) 
    		sum=sum+noCount[j];

    document.getElementById("demo").innerHTML="No: of notes : "+sum;
}

