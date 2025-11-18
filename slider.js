document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const leftBtn = document.querySelector('.arrow.left');
    const rightBtn = document.querySelector('.arrow.right');

    rightBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 500, behavior: 'smooth' });
    });

    leftBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -500, behavior: 'smooth' });
    });
});