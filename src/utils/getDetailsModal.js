import insertMyList from './insertMyList'

const getDetailsModal = (element, el) => {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const close = document.getElementById('close');
    const modalImage = modal.querySelector('.modal__image-container')
    const modalTitle = modal.querySelector('.modal__title');
    const modalDescription = modal.querySelector('.modal__description');
    const addToList = modal.querySelector('.modal__add-btn')
    const like = modal.querySelector('.modal__action-like')
    
    close.addEventListener('click', () => {
        overlay.classList.remove('active');
        modal.style.animation = 'modalOut .8s forwards'
    })

    el.addEventListener('click', () => {
        overlay.classList.add('active');
        modalImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${element.backdrop_path})`
        modal.style.animation = 'modalIn .8s forwards';

        if(element.title == null) {
            modalTitle.textContent = element.name;
        } else {
            modalTitle.textContent = element.title;
        }

        modalDescription.textContent = element.overview;

        addToList.addEventListener('click', () => {
            insertMyList(element)
        })

        like.addEventListener('click', () => {
            like.classList.toggle("liked");
        });
    });

}

export default getDetailsModal