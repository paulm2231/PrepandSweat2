
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, label, span, button");
  textElements.forEach(function(textElement) {
    textElement.classList.toggle("dark-text");
  });
}
