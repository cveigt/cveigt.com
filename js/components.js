// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load and inject the navigation
  fetch("./components/nav.html")
    .then((response) => response.text())
    .then((html) => {
      // Find the nav placeholder and replace it with the component
      document.getElementById("nav-component").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading navigation:", error);
    });

  // Load and inject the footer
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-component").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
});

function copyEmail() {
  const email = "cveigt@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const button = document.querySelector(".copy-button");
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = "Copy Email";
    }, 2000);
  });
}

// Theme toggle functionality
function initThemeToggle() {
  // Initialize theme from localStorage or system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  console.log("Initial Theme:", initialTheme); // Debugging line

  // Apply the initial theme
  document.body.classList.toggle("light-theme", initialTheme === "light");
  document.body.classList.toggle("dark-mode", initialTheme === "dark"); // Ensure dark mode is also applied

  // Add event listener after nav is loaded
  setTimeout(() => {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-mode", !isLight); // Toggle dark mode accordingly
        localStorage.setItem("theme", isLight ? "light" : "dark");
        console.log("Theme toggled to:", isLight ? "light" : "dark"); // Debugging line
      });
    } else {
      console.error("Theme toggle button not found!"); // Debugging line
    }
  }, 100);
}

// Call theme toggle initialization after DOM content is loaded
document.addEventListener("DOMContentLoaded", initThemeToggle);
