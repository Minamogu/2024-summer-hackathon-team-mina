


function gotonewsite1() {
    window.location.href = 'file:///C:/Users/User/Desktop/new%20folder/2024-summer-hackathon-team-mina/mycart/index.html';};

let cartCount = 0;
const cartButton = document.querySelector('.cart-button');  

cartButton.addEventListener('click', function() {
    cartCount++;
    document.getElementById('count').textContent = cartCount;
});

function gotonewsite2() {
    window.location.href = "https://www.instagram.com/";};

console.log('Page Loaded');
function changeImage(element) {
    document.getElementById('main-image').src = element.src;
}


let likeCount = 0;
let liked = false; 
let dislikeCount = 0;
let disliked = false;  

const gd = document.querySelector('.good');  
const bd = document.querySelector('.bad');  


gd.addEventListener('click', function() {
    if (liked) {
        likeCount = 0;  
        liked = false;  
    } else {
        likeCount = 1;  
        liked = true;   
        disliked = false;  
        dislikeCount = 0;  
    }
    document.getElementById('like-count').textContent = likeCount;  
    document.getElementById('dislike-count').textContent = dislikeCount; 
});


bd.addEventListener('click', function() {
    if (disliked) {
        dislikeCount = 0;  
        disliked = false;  
    } else {
        dislikeCount = 1;  
        disliked = true;   
        liked = false;     
        likeCount = 0;     
    }
    document.getElementById('dislike-count').textContent = dislikeCount;  
    document.getElementById('like-count').textContent = likeCount;  
});

function gotonewsite3() {
    window.location.href = 'file:///C:/Users/User/Desktop/new%20folder/2024-summer-hackathon-team-mina/cart/index2.html';};



function scrollToTopAndReload() {
    window.scrollTo(0, 0);
    window.location.reload(); 
}
