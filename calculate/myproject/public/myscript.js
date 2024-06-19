/**
 * 
 */

 function displayValue(val) {
	
	document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearDisplay() {
	document.getElementById("display").value = ""
}

function calculate() {
	var userInput = document.getElementById("display").value;  //variable decler
	var result = eval(userInput); //(eval) defult calcilate value
	
	document.getElementById("display").value = result;
}