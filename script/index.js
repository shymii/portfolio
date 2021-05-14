const scrollElements = document.querySelectorAll('.scroll');

const checkIfInView = el => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight)
}

const handleScroll = () => {
    scrollElements.forEach(el => {
        if(checkIfInView(el)) {
            el.classList.add('scrolled');
        }
    })
}

window.addEventListener('scroll', () => {
    handleScroll();
})

const handleBorgier = () => {
    if(!borgierBtn.classList.contains('active')){
        borgierBtn.classList.add('active');
        borgierNav.classList.add('show');
        borgierNav.classList.remove('hide');
        borgierNav.classList.remove('hidden');
    } else {
        borgierBtn.classList.remove('active');
        borgierNav.classList.add('hide');
        borgierNav.classList.add('hidden');
        borgierNav.classList.remove('show');
    }
}

const borgierBtn = document.querySelector('.borgier');
const borgierNav = document.querySelector('.navbar-list-wrapper');
const borgierNavItems = document.querySelectorAll('.navbar-borgier-list-item');
borgierBtn.addEventListener('click', handleBorgier)
borgierNavItems.forEach(el => {
    el.addEventListener('click', handleBorgier)
})