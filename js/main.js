const togglerMenu = document.querySelector('.toggler-menu');
const header = document.querySelector('.header');
const logoImg = document.querySelector('.logo-img')

// ADD/REMOVE CLASS "OPEN-MENU" WHEN CLICKING TOGGELER MENU
togglerMenu.addEventListener('click', () => {
    header.classList.toggle('menu-open');
})
// REMOVE "OPEN-MENU" WHEN RESIZING
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        header.classList.remove('menu-open');
    }
})

// ADD/REMOVE CLASS "SCROLLED" TO HEADER WHEN SCROLLING
window.addEventListener('scroll', () => {
    const logoImgSrc = logoImg.getAttribute('src');
    console.log(logoImgSrc);
    if (window.scrollY > 10) {
        header.classList.add('scroll');
    }
    else {
        header.classList.remove('scroll');
    }
})

// REPLACE LOGO IMAGE WHEN SCROLLING

