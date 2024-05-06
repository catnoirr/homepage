function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// =======search-bar=======

document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var searchTerm = document.getElementById("search-input").value.trim();
  if (isUrl(searchTerm)) {
      // Prepend "http://" if the input doesn't start with "http://" or "https://"
      if (!/^https?:\/\//i.test(searchTerm)) {
          searchTerm = "http://" + searchTerm;
      }
      window.location.href = searchTerm;
  } else {
      var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
      window.open(searchUrl, "_parent");
  }
  document.getElementById("search-input").value = "";
});
document.getElementById("search-input").addEventListener("input", function() {
  var clearIcon = document.getElementById("clear-input");
  clearIcon.style.display = this.value.trim() !== "" ? "inline-block" : "none";
});

document.getElementById("clear-input").addEventListener("click", function() {
  document.getElementById("search-input").value = "";
  this.style.display = "none";
});

function isUrl(text) {
  return /\./.test(text);
}
