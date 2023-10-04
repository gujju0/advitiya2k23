// var hamburger = document.querySelector(".hamburger");
// var sidebar = document.querySelector(".hamburger_menu");
// hamburger.onclick = function() {
//     sidebar.style.display = "block";
// }
// function openMenu() {
//     var x = document.querySelector(".hamburger_menu");
//     var y = document.querySelector(".hamburger img");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//       y.setAttribute("src", "images/menu.svg");
//     } else {
//         x.style.display = "block";
//         y.setAttribute("src", "images/close.svg");
//     }

//   }

  /**************Navigation Bar***************/

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
const toggleBtnIconClose = document.querySelector('.toggle_btn i .close')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
}