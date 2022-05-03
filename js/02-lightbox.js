import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector(".gallery");
const cardsMarcup = createColorCardsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", cardsMarcup);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
            return `
         <a class = "gallery__item" href = "${original}">
         <img class = "gallery__image" src="${preview}" alt="${description}">
         </a>
        `;
        })
        .join('');
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});