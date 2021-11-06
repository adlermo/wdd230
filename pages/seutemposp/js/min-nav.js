const openMenu = document.getElementById("navMobile");
const menuBar = document.getElementById("toggleMenu");

openMenu.addEventListener("change", () => {
  // Open menu checked, open menu
  menuBar.toggleAttribute("hidden");
});

menuBar.addEventListener("change", () => {
  // Menu option chosen, checking it
  menuBar.toggleAttribute("hidden");
  openMenu.firstChild.nextElementSibling.innerText = "Menu";
});

/**
 * Form intercept and redirect function
 **/
const thanksOnSubmit = () => {
  location.replace(`thanks.html`);
};
