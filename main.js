const menu_btn = document.querySelector('.menu_btn');
const menu_branding = document.querySelector('.menu_branding');
const menu_nav = document.querySelector('.menu_nav');
const home = document.querySelector('#home');
const menu = document.querySelector('.menu');

let showMenu = false

menu_btn.addEventListener('click', () => {

    if (!showMenu) {
        menu.style.visibility = 'visible'
        menu_branding.classList.add('show_overlay');
        menu_nav.classList.add('show_overlay');
        menu_btn.classList.add('show_overlay');
        

        showMenu = true
    } else {
        menu_branding.classList.remove('show_overlay')
        menu_nav.classList.remove('show_overlay');
        menu_btn.classList.remove('show_overlay');
        menu.style.visibility = 'hidden'

        showMenu = false
    }

})

const my_interests_btn = document.querySelector('.my_interests_btn');
const my_interests_menu = document.querySelector('.my_interests');

my_interests_btn.addEventListener('click', () => {

    
    if (!my_interests_menu.classList.contains('show_interest_menu')) {
        my_interests_menu.classList.add('show_interest_menu');
        my_interests_btn.style.color = '#e8676b'
        my_interests_btn.style.background = '#444'
    }else{
        my_interests_menu.classList.remove('show_interest_menu');
        my_interests_btn.style.color = '#444'
        my_interests_btn.style.background = '#e8676b'
    }

})