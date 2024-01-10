function find()
{
	let userInput = prompt("Enter a list of numbers separated by commas (e.g., 72,101,108,108,111,32,87,111,114,108,100):");

// Splitting the user input into an array of strings
let byteStrings = userInput.split(',');

// Converting the array of strings to an array of numbers
let byte = byteStrings.map(function(item) {
    return parseInt(item, 10);
});

// Convert the byte array to a string
let result = "";

for (let i = 0; i < byte.length; i++) {
    result += String.fromCharCode(byte[i]);
}

console.log(result);	
}
	

	

		