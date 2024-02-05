function openLinkRecursively() {
  window.open("https://www.example.com", "_blank");
  setTimeout(openLinkRecursively, 5000); // Delay before next opening
}

// Trigger the function on a user action:
document.getElementById("myButton").addEventListener("click", openLinkRecursively);
