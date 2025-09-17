function performOperation() {
  const input = document.getElementById("numbers").value;
  const operation = document.getElementById("operation").value;
  const nums = input.split(",").map(Number);

  let result;

  switch (operation) {
    case "add":
      result = nums.reduce((acc, val) => acc + val, 0);
      break;
    case "subtract":
      result = nums.reduce((acc, val) => acc - val);
      break;
    case "multiply":
      result = nums.reduce((acc, val) => acc * val, 1);
      break;
    case "divide":
      result = nums.reduce((acc, val) => acc / val);
      break;
    case "modulus":
      result = nums.reduce((acc, val) => acc % val);
      break;
    case "power":
      result = nums.reduce((acc, val) => Math.pow(acc, val));
      break;
    default:
      result = "Unknown operation";
  }

  document.getElementById("result").textContent = "Result: " + result;
}