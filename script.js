//your JS code here. If required.

const inputs = document.querySelectorAll(".code");
inputs.forEach((input,index) => {
	input.addEventListener("input",() => {
		input.value = input.value.replace(/[^0-9]/g,"");
	
		if (input.value !== "" && index<inputs.length-1) {
			inputs[index+1].focus();
		}
	});
	
	input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {

    if (input.value !== "") {
      input.value = "";
      event.preventDefault();
    } else if (index > 0) {
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
      event.preventDefault();
    }

  }
});
});