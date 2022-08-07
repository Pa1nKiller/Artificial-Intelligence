const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  const menuHead = document.querySelector(".header__color-active");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_activeBody");
    menuBody.classList.toggle("_activeBody");
    menuHead.classList.toggle("_activeBody");
  });
}
