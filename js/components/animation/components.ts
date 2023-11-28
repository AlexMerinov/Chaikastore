// добавление элемента в избранное
const favoriteItem = () => {
    const addFavorite = document.querySelectorAll('.js-favorite-add');

    addFavorite.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(addFavorite);
            if (!item.classList.contains('added')) {
                console.log(item);

                item.classList.add('added');
            } else {
                item.classList.remove('added');
            }

        })
    });
}


// колор пикер  --- выбор цвета товара
const colorChange = () => {
    const colorPick = document.querySelectorAll('.js-catalog-color-change');

    colorPick.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target === item) {
                colorPick.forEach((item) => {
                    item.classList.remove('active');
                });
                e.target.classList.add('active');
            }
        })
    });
}

// размер пикер  --- выбор размера товара
const sizeChange = () => {
    const sizePick = document.querySelectorAll('.js-size-list');

    sizePick.forEach((item) => {

        let itemSize = item.querySelectorAll('li');
        itemSize.forEach((link) => {
            link.addEventListener('click', (e) => {
                if (e.target === link) {
                    itemSize.forEach((item) => {
                        item.classList.remove('checked');
                    });
                    e.target.classList.add('checked');
                }
            })
        });

    });
}

// уведомление о добавлении товара в корзину
const alertActive = () => {
    const alertActive = document.querySelectorAll('.js-alert-visicle');

    alertActive.forEach((item) => {

        item.addEventListener('click', () => {
            let alert = document.querySelector('.prod-alert-add');

            alert?.classList.add('visible');

            setTimeout(() => {
                alert?.classList.remove('visible');
            }, 2000);
        })
    });
}


document.addEventListener('DOMContentLoaded', () => {
    favoriteItem();
    colorChange();
    sizeChange();
    alertActive();
});

window.addEventListener('resize', () => {
    favoriteItem();
    colorChange();
    sizeChange();
    alertActive();
});

window.addEventListener('load', () => {
    colorChange();
    sizeChange();
});