//1. Write a function to change the text of a button on the click event.




function changeButtonText() {
    // Select the button element
    const button = document.querySelector("button");
  
    // Check if the button is currently showing "Click Me!"
    if (button.textContent === "hello") {
      // If it is, change the text to "Clicked!"
      button.textContent = "you are Clicked! ";
    } else {
      // If it is not, change the text back to "Click Me!"
      button.textContent = "hello";
    }
  }
  
  // Add a click event listener to the button
  const button = document.querySelector("button");
  button.addEventListener("click", changeButtonText);