const header = document.getElementById('header-root');

window.addEventListener('scroll', ()=> {
    let Yoffset

    if(window.matchMedia('screen and (max-width: 407px)').matches){
        Yoffset = 30
    } else if (window.matchMedia('screen and (max-width: 768px)').matches) {
        Yoffset = 45
    } else {
        Yoffset = 53
    }

    if (window.pageYOffset >= Yoffset) {
        header.classList.add('scroll-bottom')
    } else {
        header.classList.remove('scroll-bottom')
    }
});