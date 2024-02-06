function openLinkRepeatedly() {
  setInterval(() => {
    window.open("https://www.example.com", "_blank"); // Replace with your link
  }, 5000); // Open link every 5 seconds (adjust as needed)
}

// Trigger the function on a user action, such as a button click:
document.getElementById("myButton").addEventListener("click", openLinkRepeatedly);
