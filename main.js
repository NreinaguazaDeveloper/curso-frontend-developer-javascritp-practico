const menuEmail = document.querySelector('.navbar-email'); //Aqui vamos  manipular el menu, por eso mandamos a llamr la clase por medio de una variable
const desktopMenu = document.querySelector ('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){ //Aqui hacemos que aparezca o desapareza el elemento
    desktopMenu.classList.toggle('inactive');
}

