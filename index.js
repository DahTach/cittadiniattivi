

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
    var arrayVariable = ['Pier Paolo', 'Stefano', 'Nicola', 'Giovanni', 'Erasmo', 'Matteo', 'Giovanni', 'Adriano', 'Alessio', 'Fabio', 'Gloria', 'Lorella', 'Mauro', 'Nicola', 'Stefania', 'Alessandro', 'Barbara Chiara', 'Cristina', 'Diego', 'Elena', 'Erika', 'Ivana Mariangela', 'Mirco', 'Nadia', 'Paolo', 'Renata', 'Vittorio', 'Francesco', 'Aurora', 'Giulia', 'Emma', 'Sofia', 'Leonardo', 'Lorenzo', 'Mattia', 'Giuseppe', 'Federico', 'Simone', 'Daniele', 'Michele', 'Luigi', 'Ettore', 'Alessandro', 'Francesco', 'Giovanni', 'Andrea', 'Laura', 'Tommaso', 'Sofia', 'Gloria', 'Matteo', 'Giulia'];
    var arrayLength = arrayVariable.length;
    var temp;
    
    for (i = 0; i < arrayLength; i++) {
      temp = document.createElement('div');
      temp.className = 'results';
      temp.innerHTML = `
              <div class="relative flex items-center px-3 py-2 space-x-2 bg-white border rounded-lg shadow-sm hover:shadow-md">
                <div class="flex-1 min-w-0">
                  <span class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-600">${arrayVariable[i]}</p>
                  </span>
                </div>
              </div>`;
      document.getElementById('chi_siamo_people').appendChild(temp);
    }
  }

chiSiamoList()
};

