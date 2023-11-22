const catalogListGallery = () => {
    const listGallery = document.querySelectorAll('.js-product-card-gallery');
    listGallery.forEach((gallery) => {
        const items = gallery.querySelectorAll('.product-card__gallery__item');
        items.forEach((photo) => {
            photo.addEventListener('mouseover', () => {
                const img = photo.getAttribute('data-img') || '';
                gallery.setAttribute('data-src-bg', img);
                gallery.style.backgroundImage = `url('${img}')`;
                items.forEach((photoItem) => {
                    photoItem.classList.remove('active');
                });
                photo.classList.add('active');
            });
        });
    });
};

const favoriteItem = () => {
    const addFavorite = document.querySelectorAll('.js-favorite-add ');
    addFavorite.forEach((item) => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('added')) {
                item.classList.add('added');
            } else {
                item.classList.remove('added');
            }

        })
    });
}




document.addEventListener('DOMContentLoaded', () => {
    catalogListGallery();
    favoriteItem();
});

