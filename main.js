// Animate skill bars
window.addEventListener("load", () => {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("thank-you").style.display = "block";
  this.reset();
});
