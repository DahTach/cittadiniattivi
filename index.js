

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

  function chiSiamoList() {
    var arrayVariable = ['Pier Paolo', 'Stefano', 'Nicola', 'Giovanni', 'Erasmo', 'Matteo', 'Giovanni', 'Adriano', 'Alessio', 'Fabio', 'Gloria', 'Lorella', 'Mauro', 'Nicola', 'Stefania', 'Alessandro', 'Barbara', 'Chiara', 'Cristina', 'Diego', 'Elena', 'Erika', 'Ivana', 'Mariangela', 'Mirco', 'Nadia', 'Paolo', 'Renata', 'Vittorio', 'Francesco', 'Aurora', 'Giulia', 'Emma', 'Sofia', 'Leonardo', 'Lorenzo', 'Mattia', 'Giuseppe', 'Federico', 'Simone', 'Daniele', 'Michele', 'Luigi', 'Ettore', 'Alessandro', 'Francesco', 'Giovanni', 'Andrea', 'Laura', 'Tommaso', 'Sofia', 'Gloria', 'Matteo', 'Giulia'];
    var arrayLength = arrayVariable.length;
    var temp;
    
    for (i = 0; i < arrayLength; i++) {
      temp = document.createElement('div');
      temp.className = 'results';
      temp.innerHTML = `
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 flex-none" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ${arrayVariable[i]}
            </li>`;
      document.getElementById('chi_siamo_people').appendChild(temp);
    }
  }

chiSiamoList()
};

