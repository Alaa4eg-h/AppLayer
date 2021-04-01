const togglerMenu = document.querySelector('.toggler-menu');
const header = document.querySelector('.header');
const logoImg = document.querySelector('.logo-img')
const navLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');
const prevBtn = document.querySelector('.control-left');
const nextBtn = document.querySelector('.control-right');
const card = document.querySelectorAll('.card');
const accordion = document.querySelector('.accordion');
const faq = document.querySelectorAll('.single-faq');
const backToTop = document.querySelector('.back');



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

// LOOP THROW FAQ ACCORDION 
for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function () {
        const notElement = (!this);
        this.classList.toggle('active');
    })
}

// TESTIMONIALS SLIDER

// RESET THE SLIDER IMAGES
function reset() {
    for (let i = 0; i < card.length; i++) {
        card[i].style.display = "none";
    }
}

// INITIAL THE SLIDER IMAGE
function startSlider() {
    reset();
    card[0].style.display = "block";
}
startSlider();

let current = 0;

// prevBtn
function slideLeft() {

    reset();
    card[current - 1].style.display = "block";
    current--;
}

// nextBtn
function slideRight() {

    reset();
    card[current + 1].style.display = "block";
    current++;
}

prevBtn.addEventListener('click', function () {

    if (current === 0) {
        current = card.length;
    }
    slideLeft();
})

nextBtn.addEventListener('click', function () {

    if (current === card.length - 1) {
        current = -1;
    }
    slideRight();
})
// ADD/REMOVE CLASS TO BACK TO TOP BTN
window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
})

// SCROLL TO TOP 
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
})