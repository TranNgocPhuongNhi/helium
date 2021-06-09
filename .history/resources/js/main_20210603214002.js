// var slideIndex = 0;
// showSlides();
        
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("background_carousel");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active-dot", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active-dot";
//     setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

//============================= Scrolling Navigation Bar =============================================================
const nav = document.querySelector("nav");
window.addEventListener("scroll",() => {
    const offset = window.pageYOffset;
    if(offset > 20) {
        nav.classList.add('scroll','animate__animated, animate__bounce');
    }
    else {
        nav.classList.remove('scroll');
    }
})