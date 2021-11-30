var cards = document.querySelectorAll('.card-item')

var logo = document.querySelector('.header-logo');
var popup = document.querySelector('.user-menu');

cards.forEach( card => {
    card.classList.add('hover_class1');
});
console.log(cards);


logo.addEventListener('click', () => { 
    if(popup) {
        popup.classList.add('user-disp');
        } else {
            remove
        }
    });

