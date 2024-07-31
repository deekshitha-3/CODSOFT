const res = document.getElementById("result");

function calculate() {
  let value = res.value;
  
  if (value.includes("%")) {
    const parts = value.split("%");
    if (parts.length === 2 && parts[1] === "") {
      value = parseFloat(parts[0]) / 100;
    } else if (parts.length === 2) {
      value = (parseFloat(parts[0]) / 100) * parseFloat(parts[1]);
    } else {
      value = "Error";
    }
  } else {
    try {
      value = eval(value || null);
    } catch (e) {
      value = "Error";
    }
  }
  
  if (isNaN(value)) {
    res.value = "Error";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = value;
  }
}

function clearAll() {
  res.value = "";
}

function backspace() {
  res.value = res.value.substring(0, res.value.length - 1);
}

function liveScreen(enteredValue) {
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      res.value += e.key;
      break;
    case "Enter":
      calculate();
      break;
    case "Backspace":
      res.value = res.value.substring(0, res.value.length - 1);
      break;
    case "Delete":
      clearAll();
      break;
    case "%":
      liveScreen("%");
      break;
    default:
      break;
  }
}
