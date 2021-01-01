toggle_btn = document.querySelector(".navbar_toggle");
menu = document.querySelector(".navbar_menu");
icons = document.querySelector(".navbar_icons");

toggle_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});
