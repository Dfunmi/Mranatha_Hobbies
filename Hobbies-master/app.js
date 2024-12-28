const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

// Menu toggle function
const toggleMenu = () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
}

btn.addEventListener('click', toggleMenu)
document.addEventListener('click', (e) => {

    if (nav.classList.contains('flex') && 
        !nav.contains(e.target) && 
        !btn.contains(e.target)) {
        toggleMenu()
    }
})