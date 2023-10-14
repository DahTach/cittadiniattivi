window.onload = () => {
  // COOKIES

  var cookies = document.getElementById("cookies-popup");

  function cookiesModal() {
    cookies.showModal();
  }

  // cookiesModal();

  cookies.addEventListener("click", function (event) {
    if (event.target.id === "accept-cookies") {
      cookies.close();
    }
    if (event.target.id === "refuse-cookies") {
      cookies.close();
    }
  });

  // MOBILE MENU

  var menu = document.getElementById("mobile-menu");

  document
    .getElementById("open-menu-button")
    .addEventListener("click", function () {
      menu.showModal();
    });

  document
    .getElementById("close-menu-button")
    .addEventListener("click", function () {
      menu.close();
    });

};