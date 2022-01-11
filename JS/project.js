var cards = document.querySelectorAll('.card-item')

var logo = document.querySelector('.header-logo');
var popup = document.querySelector('.user-menu');
var inputs = document.querySelectorAll('.form_input');

cards.forEach( card => {
    card.classList.add('hover_class1');
});



logo.addEventListener('click', () => { 
    popup.classList.add('user-disp');
});

popup.addEventListener('click', () => {
    popup.classList.remove('user-disp');
});


var reg = /[a-z]/ig;

var patterns = {
    username: /^[a-z0-9]{5,12}$/i,
    email: /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex) {
    //console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
 }

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});