document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("moon-dark").classList.toggle("hidden");
});

const toggleDark = () => {
  document.getElementById("body").classList.toggle("dark");
  document.getElementById("moon-light").classList.toggle("hidden");
  document.getElementById("moon-dark").classList.toggle("hidden");
};
