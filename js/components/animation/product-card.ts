const catalogListGallery = () => {
    const listGallery = document.querySelectorAll('.js-product-card-gallery');
    listGallery.forEach((gallery) => {

        const itemHover = () => {
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
        }

        const itemSwipe = () => {
            gallery.addEventListener('touchstart', handleTouchStart, false);
            gallery.addEventListener('touchmove', handleTouchMove, false);

            let xDown = null;
            let yDown = null;

            function handleTouchStart(e) {
                xDown = e.touches[0].clientX;
                yDown = e.touches[0].clientY;
            };

            function handleTouchMove(e) {
                if (!xDown || !yDown) {
                    return;
                }

                let xUp = e.touches[0].clientX;
                let yUp = e.touches[0].clientY;

                let xDiff = xDown - xUp;
                let yDiff = yDown - yUp;

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        e.preventDefault();
                        let itemActive = gallery.querySelector('.product-card__gallery__item.active');
                        if (itemActive.nextElementSibling !== null) {
                            const img = itemActive?.nextElementSibling.getAttribute('data-img') || '';
                            gallery.setAttribute('data-src-bg', img);
                            gallery.style.backgroundImage = `url('${img}')`;

                            itemActive.classList.remove('active');
                            itemActive?.nextElementSibling?.classList.add('active');
                        }

                    } else {
                        e.preventDefault();
                        let itemActive = gallery.querySelector('.product-card__gallery__item.active');
                        if (itemActive?.previousElementSibling !== null) {
                            const img = itemActive?.previousElementSibling.getAttribute('data-img') || '';
                            gallery.setAttribute('data-src-bg', img);
                            gallery.style.backgroundImage = `url('${img}')`;

                            itemActive.classList.remove('active');
                            itemActive?.previousElementSibling?.classList.add('active');
                        }
                    }
                }

                xDown = null;
                yDown = null;
            };
        };

        if (window.innerWidth < 1280) {
            itemSwipe();

        } else {
            itemHover();
        }

    });
};


window.addEventListener('resize', () => {
    catalogListGallery();
});

window.addEventListener('load', () => {
    catalogListGallery();
});
