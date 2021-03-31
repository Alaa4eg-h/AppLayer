const togglerMenu = document.querySelector('.toggler-menu');
const header = document.querySelector('.header');
const logoImg = document.querySelector('.logo-img')
const navLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');
const arrows = document.querySelectorAll('.accordion .icon')


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

const logoImgSrc = logoImg.getAttribute('src');
// ADD/REMOVE CLASS "SCROLLED" TO HEADER WHEN SCROLLING
window.addEventListener('scroll', () => {
    const logoImgSrcN = logoImgSrc.replace("logo.svg", "logo-2.svg");
    if (window.scrollY > 10) {
        header.classList.add('scroll');
        // REPLACE LOGO IMAGE WHEN SCROLLING
        logoImg.setAttribute('src', logoImgSrcN);
    }
    else {
        header.classList.remove('scroll');
        logoImg.setAttribute('src', logoImgSrc);
    }
})


// ADD SMOOTH SCROLLING WHEN SELECT THE NAV LINK
// FIRST ADD CLICK EVENT TO ALL LINKS
navLink.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 80;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        })
        // REMOVE "OPEN-MENU" WHEN TAGRET A LINK
        header.classList.remove('menu-open');
        navList.querySelector('.active').classList.remove('active');
        link.classList.add('active');
    })
})

arrows.forEach((r) => {
    r.addEventListener('click', (e) => {
        e.preventDefault();
        const arrowParent = r.parentElement.parentElement;
        if (arrowParent.classList.contains("active")) {
            arrowParent.classList.toggle('active');
        }
    })
})



