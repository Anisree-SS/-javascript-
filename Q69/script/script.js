function find()
{
	var str=document.getElementById("num1").value;
       const stack = [];
       const open= '({[';
        const close = ')}]';
            for (var char of str) {
                if (open.includes(char)) {
                    stack.push(char);
                } 
		else if (close.includes(char)) {
                    const lastOpen = stack.pop();
                    if ((char === ')' && lastOpen !== '(') || (char === '}' && lastOpen !== '{') ||(char === ']' && lastOpen !== '[')
                    )
		 {
                        document.getElementById("demo").innerHTML = "is not valid";
                    }
                }
            }
	if(stack.length === 0)
        document.getElementById("demo").innerHTML = "is  valid";
	else
	document.getElementById("demo").innerHTML = "is not valid";
 }
	

	

		