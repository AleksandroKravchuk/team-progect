(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");


  
  menuBtnRef.addEventListener("click", () => {
 

    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });
  menuBtnClose.addEventListener("click", () => {
    menuBtnRef.classList.remove("is-open");
    mobileMenuRef.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
   $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
    mobileMenuRef.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    menuBtnRef.classList.remove("is-open");
        return false;
   });
  
})();