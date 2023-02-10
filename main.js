const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-card');
const aside = document.querySelector('.product-detail');

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
