var cards = document.querySelectorAll('.card-item')

var logo = document.querySelector('.header-logo');
var popup = document.querySelector('.user-menu');


cards.forEach( card => {
    card.classList.add('hover_class1');
});



logo.addEventListener('click', () => { 
    popup.classList.add('user-disp');
});

popup.addEventListener('click', () => {
    popup.classList.remove('user-disp');
});
