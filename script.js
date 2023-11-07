const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const main_navbar = document.querySelector('#unhide')

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('dark:bg-[#0c0c0c]')
    main_navbar.classList.toggle('hidden')
}
function hide() {
    menu_button.name = menu_button === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('md:left-[1%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('lg:shadow-none')
    navLinks.classList.toggle('dark:bg-[#0c0c0c]')
    navLinks.classList.toggle('lg:bg-transparent')
    main_navbar.classList.toggle('hidden')
}