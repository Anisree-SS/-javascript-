function performOperation() {
  var choice = '0'; // Initialize choice as a string
  while (choice !== '5') { // Compare choice to strings in the while loop
    console.log("1 - Add","2 - Subtract","3 - Multiply","4 - Divide","5 - Exit");
   
    choice = (prompt("Enter your choice:"));
    switch (choice) {
      case '1': // Compare choice to strings in the switch cases
        add();
        break;
      case '2':
        subtract();
        break;
      case '3':
        multiply();
        break;
      case '4':
        divide();
        break;
      case '5':
        console.log("Exiting the program. Goodbye!");
        break;
      default:
        console.log("Invalid choice. Please enter a valid option.");
    }
  }
}

// Define arithmetic operation functions (add, subtract, multiply, divide) as before...

performOperation();

function add() {
    let addNum1 = parseFloat(prompt("Enter first number for addition:"));
    let addNum2 = parseFloat(prompt("Enter second number for addition:"));
    let sum = addNum1 + addNum2;
    console.log(`The result of addition is: ${sum}`);
}

function subtract() {
    let subNum1 = parseFloat(prompt("Enter first number for subtraction:"));
    let subNum2 = parseFloat(prompt("Enter second number for subtraction:"));
    let difference = subNum1 - subNum2;
    console.log(`The result of subtraction is: ${difference}`);
}

function multiply() {
    let mulNum1 = parseFloat(prompt("Enter first number for multiplication:"));
    let mulNum2 = parseFloat(prompt("Enter second number for multiplication:"));
    let product = mulNum1 * mulNum2;
    console.log(`The result of multiplication is: ${product}`);
}

function divide() {
    let divNum1 = parseFloat(prompt("Enter dividend:"));
    let divNum2 = parseFloat(prompt("Enter divisor:"));
    if (divNum2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        let quotient = divNum1 / divNum2;
        console.log(`The result of division is: ${quotient}`);
    }
}
	

	

		