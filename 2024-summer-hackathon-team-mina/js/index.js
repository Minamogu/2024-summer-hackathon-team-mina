const swiper = new Swiper(".swiper-container", {
  centeredSlides: true, 
  loop: true, 
  speed: 500, 
  slidesPerView: 1.6, 
  effect: "coverflow",
  
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const boxes = document.querySelectorAll('.third-section-box');


boxes.forEach(function(box) {
const img = box.querySelector('img');
const discount = box.querySelector('.third-section-box-text')

box.addEventListener('mouseover',function(){
  box.style.backgroundColor = '#0099ff'
  img.style.visibility = 'hidden';
  discount.style.visibility = 'hidden';
});

box.addEventListener('mouseleave',function(){
  box.style.backgroundColor = 'white'
  img.style.visibility = 'visible';
  discount.style.visibility = 'visible';

});
});