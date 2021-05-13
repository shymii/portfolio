const scrollElements = document.querySelectorAll('.scroll');

const checkIfInView = el => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight)
}

const handleScroll = () => {
    scrollElements.forEach(el => {
        if(checkIfInView(el)) {
            el.classList.add('scrolled');
            el.classList.remove('scroll');
        }
    })
}

window.addEventListener('scroll', () => {
    handleScroll();
})