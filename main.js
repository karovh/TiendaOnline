const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-card');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    //ocultando el menu al abrir el carrito
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    //ocultando el menu hamburguesa al abrir el carrito
    const isAsideClose = aside.classList.contains('inactive');    
    if (!isAsideClose) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
     //ocultando el carrito al abrir el menu hamburguesa
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');    

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')    
}

//creando la lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',    
});
productList.push({
    name: 'Pantalla',
    price: 500.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaLk-dmvZfDu0Bmbcd-Gi7gpqqU8A0sP2tg&usqp=CAU',
});
productList.push({
    name: 'Mesa',
    price: 100.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpOUXO4aLxN9H6PAn5uc_6OCyBYcqQA4uWQ&usqp=CAU',
});
productList.push({
    name: 'Silla',
    price: 90.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaddxBk_z2uOlBNHWDTYtCo4yna4FVC2WDZw&usqp=CAU',
});
productList.push({
    name: 'Cama',
    price: 550.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnhDCv1fGMd_rPLAcDQMuy1Z4VZ-VMLfO_VmqvBrRkO7iXHvzUrDaebEoEIrdRcdWSCI&usqp=CAU',
});

//Insertar productos en dom//
        
for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p');
    productName.innerText = product.name;

    //metiendo los productos dentro de  DIV//
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg')

    //metiendo los productos dentro de los  DIV//

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
   
    cardsContainer.appendChild(productCard);
}
