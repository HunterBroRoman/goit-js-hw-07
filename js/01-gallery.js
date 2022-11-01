import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const myGallery = document.querySelector(".gallery");

//создаем разметку одной картинки
function createGalleryMarkup(items) {
  return items.map((item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`).join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);// переменная со всеми картинками

myGallery.innerHTML = addGalleryMarkup; // вставляем все картинки в код HTML

myGallery.addEventListener("click", onImageClick); // обработчик события на всю галлерею

function onImageClick(event) {
  
  blockStandartAction(event);   // запрет на открытие картинки при клике не по ней
  
  if (event.target.nodeName !== "IMG") {   // если не картинка, то выходим
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">`);  // используем библиотеку Ligthbox

  instance.show();

  //закрываем кнопкой клавиатуры
  myGallery.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
//функция для клику не по картинке
function blockStandartAction(event) {
  event.preventDefault();
}
