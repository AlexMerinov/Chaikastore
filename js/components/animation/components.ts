// добавление элемента в избранное
const favoriteItem = () => {
    const addFavorite = document.querySelectorAll('.js-favorite-add');

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


// колор пикер  --- выбор цвета товара
const colorChange = () => {
    const colorPick = document.querySelectorAll('.js-catalog-color-change');
    const colorDesc = document.querySelector('.js-color-description');

    colorPick.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target === item) {
                colorPick.forEach((item) => {
                    item.classList.remove('active');
                });
                e.target.classList.add('active');
            }

            if (colorDesc) {
                if (item.classList.contains('active')) {
                    let thisColor = item.getAttribute('data-color-description');
                    colorDesc.innerHTML = thisColor;
                }
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

//показать все цвета
const colorMore = () => {
    const jsColorMore = document.querySelectorAll('.js-color-more');

    jsColorMore.forEach((item) => {

        item.addEventListener('click', (e) => {
            e.preventDefault;
            item.closest('.product-card__colors')?.classList.add('open');
        })
    })

}

//стандартный аккордин с одним уровнем вложенности
const baseAccordion = () => {
    const jsBaseAccordion = document.querySelectorAll('.js-base-accordion');

    jsBaseAccordion.forEach((item) => {
        let tabChildArr = item.querySelectorAll('.accordion__item');

        tabChildArr.forEach((link) => {
            link.addEventListener('click', (e) => {

                if (link.classList.contains('open')) {
                    link.classList.remove('open');
                } else {
                    tabChildArr.forEach((link) => {
                        link.classList.remove('open');
                    });
                    link.classList.add('open');
                }
            });
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
    colorMore();
    baseAccordion();
});

window.addEventListener('resize', () => {
    favoriteItem();
    colorChange();
    sizeChange();
    alertActive();
    colorMore();
    baseAccordion();
});

window.addEventListener('load', () => {
    colorChange();
    sizeChange();
});