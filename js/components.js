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
