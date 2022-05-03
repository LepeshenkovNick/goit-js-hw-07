import { galleryItems } from './gallery-items.js';
// Change code below this lin
console.log(galleryItems);

const galleryItemsContainer = document.querySelector(".gallery");
const cardsMarcup = createColorCardsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", cardsMarcup);

galleryItemsContainer.addEventListener("click", onClickGallery);

function createColorCardsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
    })
    .join("");
}

function onClickGallery(event) {
    const isGalleryImageEl = event.target.classList.contains("gallery__image");
    if (!isGalleryImageEl) {
    return;
    }
    event.preventDefault();
    

    const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
    `,
    {
    onShow: (instance) => {
        const listener = function (event) {
            if (event.key === "Escape") {
                document.removeEventListener("keydown", listener);
                return instance.close();
            }
        };
        document.addEventListener("keydown", listener);
        },
    }
    );

    instance.show();
}


