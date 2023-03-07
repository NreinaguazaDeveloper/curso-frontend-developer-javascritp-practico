const menuEmail = document.querySelector('.navbar-email'); //Aqui vamos  manipular el menu, por eso mandamos a llamr la clase por medio de una variable
const desktopMenu = document.querySelector ('.desktop-menu');
const iconmenu = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');



menuEmail.addEventListener('click', toggleDesktopMenu);
iconmenu.addEventListener('click', togglemobileMenu);

function toggleDesktopMenu(){ //Aqui hacemos que aparezca o desapareza el elemento
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){//Aqui hacemos que aparezca o desapareza el elemento
    mobileMenu.classList.toggle('inactive')
}
