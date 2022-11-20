(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenulBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
    menuList: document.querySelector("mobile-nav"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    }
    
    function removeMenu() {
        refs.menu.classList.add("is-hidden");
        refs.body.classList.remove("no-scroll");
  }
})();