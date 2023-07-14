// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const ulElem = document.querySelector('.gallery');
const markupGalleryItems = createMarkupGallery(galleryItems);
ulElem.insertAdjacentHTML('beforeend', markupGalleryItems);

const lightbox = new SimpleLightbox('.gallery a',{captionsData: "alt", captionDelay: 250});


function createMarkupGallery(galleryItems) {
    const markup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;  
              
    });
    return (markup.join(''));
}
