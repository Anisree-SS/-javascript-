function find()
{
	var occ={};
	var txt=document.getElementById("str").value;
	var n=txt.length;
	var count = {};
            for (var i = 0; i < n; i++) {
                var char = txt[i];
                if (count[char] === undefined) {
                    count[char] = 1;
                } 
		else 
		{
                   count[char]++;
                }
            }
            for (var char in count) {
                document.write(char +" =  "+count[char]+"\t");
            }
}
	

	
	

	