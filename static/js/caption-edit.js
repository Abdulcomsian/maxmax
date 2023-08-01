function editCaption() {
  // Get the 'caption' element
  const captionElement = document.getElementById("caption");

  // Get the current text content of the caption
  const currentText = captionElement.querySelector("span").textContent;

  // Create an input field element
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = currentText.trim();

  // Replace the 'span' with the input field
  captionElement.replaceChild(inputField, captionElement.querySelector("span"));

  // Hide the 'edit' div and show the 'save' div
  const editDiv = document.querySelector(".edit");
  const saveDiv = document.querySelector(".save");
  captionElement.style.width = "90%";
  editDiv.style.display = "none";
  saveDiv.style.display = "inline-block";
}

function saveCaption() {
  // Get the 'caption' element
  const captionElement = document.getElementById("caption");

  // Get the input field
  const inputField = captionElement.querySelector("input");

  // Get the new caption from the input field
  const newCaption = inputField.value;

  // Create a new 'span' element with the updated caption
  const newSpan = document.createElement("span");
  newSpan.textContent = newCaption;

  // Replace the input field with the new 'span'
  captionElement.replaceChild(newSpan, inputField);

  // Hide the 'save' div and show the 'edit' div
  const editDiv = document.querySelector(".edit");
  const saveDiv = document.querySelector(".save");
  editDiv.style.display = "inline-block";
  saveDiv.style.display = "none";
}
