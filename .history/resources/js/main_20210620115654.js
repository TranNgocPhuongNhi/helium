// ===================================== Mobile Navbar ===================================
const mobileNav = document.querySelector('.mobileNav')

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
    console.log(offset);
    if(offset > 30) {
        backToTop.style.display = 'block';
    }
    else {
        backToTop.style.display = 'none';
    }
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