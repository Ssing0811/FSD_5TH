function calculate(operation) {
  // Get values from input boxes
  let n1 = parseFloat(document.getElementById("num1").value) || 0;
  let n2 = parseFloat(document.getElementById("num2").value) || 0;
  let n3 = parseFloat(document.getElementById("num3").value) || 0;
  
  let result = 0;

  // Perform operation
  if (operation === 'add') {
    result = n1 + n2 + n3;
  } else if (operation === 'subtract') {
    result = n1 - n2 - n3;
  } else if (operation === 'multiply') {
    result = n1 * n2 * n3;
  } else if (operation === 'divide') {
    if (n2 === 0 || n3 === 0) {
      result = "Error: Division by zero!";
    } else {
      result = n1 / n2 / n3;
    }
  }

  // Show result
  document.getElementById("result").innerText = "Result: " + result;
}