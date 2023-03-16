// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const containerEl = document.querySelector('.gallery');
console.log(galleryItems);

galleryItems.forEach(item => {
  console.log(item);
  const div = document.createElement('div');
  div.classList.add('gallery__item');
  div.innerHTML = `
  <a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
  `;
  containerEl.append(div);
})


const array = [];

for (let item of galleryItems) {
  array.push(item.original);
}

console.log(array);

for (let i = 0; i < array.length; i++) {
  const a = document.createElement('a');
  a.setAttribute('href', array[i]);
  a.innerHTML = `<img src='${array[i]}'
  alt='test ${i}'
  />
  `;
  containerEl.append(a);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 100,
  closeText: 'x',
  animationSlide: false,
});
