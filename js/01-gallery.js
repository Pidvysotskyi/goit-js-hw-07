import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryMarkup = galleryItems.map(({ original, preview, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
  </div>`;
});

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("afterbegin", galeryMarkup.join(""));

galleryRef.addEventListener("click", onGalerryClick);

function onGalerryClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }
  const imageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${imageUrl}" width="800" height="600">`);

  instance.show();

  window.addEventListener("keydown", onEscPush);

  function onEscPush(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
