// Print a message to the console
console.log("Welcome to my portfolio site!");

// Example: show a greeting when a button is clicked (if added to HTML)
function showGreeting() {
  alert("Thanks for visiting my portfolio!");
}

// Optionally, attach event listener if a button exists
document.addEventListener("DOMContentLoaded", function () {
  const greetButton = document.getElementById("greetButton");
  if (greetButton) {
    greetButton.addEventListener("click", showGreeting);
  }
});
