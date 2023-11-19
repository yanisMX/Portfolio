let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}




window.addEventListener('load', function() {
  var cards = document.getElementsByClassName('services-box');
  var maxHeight = 0;
  
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].offsetHeight > maxHeight) {
      maxHeight = cards[i].offsetHeight;
    }
  }
  
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.height = maxHeight + 'px';
  }
});

let readmore = document.getElementById('specialBouton')
readmore.addEventListener('click', function (){
  alert('Contactez-moi pour en savoir plus !')
})