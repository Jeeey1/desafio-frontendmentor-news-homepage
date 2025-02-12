const iconMenuMobile = document.querySelector(".header-menu-mobile");
const sideBarMobile = document.querySelector(".nav-menu-mobile");
const iconCloseMenuSide = document.querySelector(".nav-menu-close");
const mediaQuery = window.matchMedia("(max-width: 500px)");
const imgContentMain = document.querySelector(".main-content img");

iconMenuMobile.addEventListener("click", () => {
  sideBarMobile.classList.add("active");
});

iconCloseMenuSide.addEventListener("click", () => {
  sideBarMobile.classList.remove("active");
});

function alteraImagem() {
  if (mediaQuery.matches) {
    imgContentMain.src = "assets/images/image-web-3-mobile.jpg";
  } else {
    imgContentMain.src = "assets/images/image-web-3-desktop.jpg";
  }
}

alteraImagem();
window.addEventListener('resize', alteraImagem);