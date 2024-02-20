let toggleMenu = document.querySelector("#toggle-menu");
let menuItems = document.querySelector(".header-links");

toggleMenu.addEventListener("click", () => {
  menuItems.classList.toggle("show-menu");
});


// اخبار الخليج العربى
document.querySelector('.right').addEventListener('click', function() {
  document.querySelector('.two').scrollLeft -= 150;
});

document.querySelector('.left').addEventListener('click', function() {
  document.querySelector('.two').scrollLeft += 150;
});
