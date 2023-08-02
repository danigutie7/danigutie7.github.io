(function(){
    const openButton = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link");
    const closeMenu = document.querySelector(".nav__close");

    openButton.addEventListener("click", () => {
        menu.classList.add("nav__link--show");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("nav__link--show");
    });
})();


$(document).ready(function() {
    $(".nav__links, .cta, .cta__knowledge").on("click", function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      var distance = $(target).offset().top;
      $("html, body").animate({
        scrollTop: distance
      }, 1250); // Duración de la animación en milisegundos (1 segundo en este caso)
    });
  });