// Dark Mode

const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;
const logo = document.getElementById("logo"); // logo changing

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Check if dark mode is enabled after toggle
  if (body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode"; // Change button text to Light Mode
    logo.src = "img/ihd-dark-theme-logo.png"; // Change logo src to dark mode logo
  } else {
    darkModeBtn.textContent = "Dark Mode"; // Change button text to Dark Mode
    logo.src = "img/ihd-light-theme-logo.png"; // Change logo src to light mode logo
  }
});
