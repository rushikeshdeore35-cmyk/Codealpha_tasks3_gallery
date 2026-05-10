const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});


function closeLightbox() {
  lightbox.style.display = 'none';
}


function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;
}


function filterImages(category) {
  images.forEach(img => {
    if (category === 'all') {
      img.style.display = 'block';
    } else {
      img.style.display = img.classList.contains(category) ? 'block' : 'none';
    }
  });
}