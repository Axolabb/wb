const burger_icon = document.querySelector('.burger-icon');
const burger_modal = document.querySelector('.burger-container');
const list_item = document.querySelectorAll('.header__item--modal')
burger_icon.addEventListener('click', () => {
    if(burger_icon.classList.contains('active'))  {
        burger_modal.classList.remove('visible');
        burger_icon.classList.remove('active');
        
    }
    else{
        burger_modal.classList.add('visible');
        burger_icon.classList.add('active');
    }
    
})

list_item.forEach(item => {
    item.addEventListener('click', () => {
        burger_modal.classList.remove('visible');
        burger_icon.classList.remove('active');
    });
});

let inputs = document.querySelector('.input-number');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);