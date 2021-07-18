// ===================================== Mobile Navbar ===================================
const mobileNav = document.querySelector('.mobile-nav');
const navbar = document.querySelector('.header_navbar_nav');

mobileNav.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

//============================= Scrolling Navigation Bar =============================================================
const nav = document.querySelector("nav");
window.addEventListener("scroll",() => {
    const offset = window.pageYOffset;
    if(offset > 20) {
        nav.classList.add('scroll','animate__animated', 'animate__fadeInDown');
    }
    else {
        nav.classList.remove('scroll');
    }
})

// =========================================== To the top ===================================
const backToTop = document.querySelector('.back-to-top');
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if(offset > 30) {
        backToTop.style.display = 'block';
    }
    else {
        backToTop.style.display = 'none';
    }
})

// ================================= Portfolio ======================================
const filter_btn = document.querySelectorAll('.portfolio_choose-link');
const portfolio_items = document.querySelectorAll('.portfolio_item');

// filter_btn.forEach((element) => {
//     element.addEventListener('click', item => {
//         for(let i = 0; i < filter_btn.length; i++) {
//             console.log(filter_btn[i]);
//             filter_btn[i].classList.remove('choose-active');
//         }
//         // this.classList.add('choose-active');
//      })
// })

Array.from(filter_btn).forEach(function(element) {
    element.addEventListener('click', function(event) {
        fo
    })
})


// ========================================= Owl Carousel =====================================
$('.owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})

$('#owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})
