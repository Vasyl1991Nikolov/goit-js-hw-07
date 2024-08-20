const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const currentValue = event.currentTarget.value.trim();
  output.textContent = currentValue === "" ? "Anonymous" : currentValue;
});


