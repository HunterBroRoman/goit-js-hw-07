import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const myGallery = document.querySelector(".gallery");

//создаем разметку одной картинки
function createGalleryMarkup(items) {
  // items это галлерея с картинками galleryItems
  return items
    .map(
      (item) =>
        `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems); // переменная со всеми картинками,

myGallery.innerHTML = addGalleryMarkup; // вставляем все картинки в код HTML

new SimpleLightbox(".gallery a", {enableKeyboard: true, captionsData: 'alt', captionDelay: 250});

