const menuEmail = document.querySelector('.navbar-email'); //Aqui vamos  manipular el menu, por eso mandamos a llamr la clase por medio de una variable
const desktopMenu = document.querySelector ('.desktop-menu');
const iconmenu = document.querySelector ('.menu');
const menuIconoCarrito = document.querySelector ('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer'); //id-shoppingCartContainer
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector ('.mobile-menu');
const cardsContainer = document.querySelector ('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
iconmenu.addEventListener('click', togglemobileMenu);
menuIconoCarrito.addEventListener('click',toggleMenuCarrito);
productDetailClose.addEventListener('click',closeProductDetailAside);



function toggleDesktopMenu(){ //Aqui hacemos que aparezca o desapareza el elemento
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
      shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){//Aqui hacemos que aparezca o desapareza el elemento
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
      shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside(); //cada vez que se le de click al boton se cerrara cualquier otra cosa abierta
    mobileMenu.classList.toggle('inactive')

}

function toggleMenuCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function toggleMenuCarrito() {
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactve');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');

}
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p')
    productName.innerText = '$' + product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
