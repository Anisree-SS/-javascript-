function find()
{
	var text=document.getElementById("str").value;
	var n=text.length;
	var text2;
	var len=new Array();
        for(var i = 0; i < text.length; i++) 
	{
        	if (122 == text.charCodeAt(i)) 
           		  text2= "a";
        	else if (90 == text.charCodeAt(i)) 
              		text2= "A";
        	else if((65 <= text.charCodeAt(i) && text.charCodeAt(i)<= 89)||(97 <= text.charCodeAt(i) && text.charCodeAt(i) <= 121))
           		text2 =text2+String.fromCharCode(text.charCodeAt(i)+ 1);
        	else 
            		text2 =text2+text.charAt(i);
        }
   	document.getElementById("demo").innerHTML="New String is "+text2;
}
	


	
	

	