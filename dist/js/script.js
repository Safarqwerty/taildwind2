// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const otwTop = document.querySelector('#otw-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        otwTop.classList.remove('hidden')
        otwTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        otwTop.classList.remove('flex')
        otwTop.classList.add('hidden')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})