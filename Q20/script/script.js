function display(val) {
   document.getElementById("number").value += val;
}

function reset() {
   document.getElementById("number").value = "";
}

function calculate() {
   var x = document.getElementById('number').value;
   let y = eval(x);
   document.getElementById('number').value = y;
}


function deleteData() {
   data = document.getElementById("number").value;
   data = data.substring(0, data.length - 1);
   document.getElementById("number").value = data;
}