const images = [
    './images/img-logo.jpg',
    './images/img-1.jpg',
    './images/img-2.jpg',
];
let currentIndex = 0;
const imgElement = document.querySelector('.box-img img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
function updateImage() {
    imgElement.src = images[currentIndex];
}
prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateImage();
});
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
});
let autoSlideInterval = window.setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
}, 5000);
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        backToTopBtn.style.display = 'block';
    }
    else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
export {};
//# sourceMappingURL=index.js.map