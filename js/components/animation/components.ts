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
            link.addEventListener('click', () => {

                if (link.classList.contains('open')) {
                    link.classList.remove('open');
                    link.lastElementChild.style.maxHeight = 0 + 'px';

                } else {
                    tabChildArr.forEach((link) => {
                        link.classList.remove('open');
                        link.lastElementChild.style.maxHeight = 0 + 'px';
                    });
                    link.classList.add('open');
                    link.lastElementChild.style.maxHeight = link.lastElementChild.scrollHeight + 'px';
                }
            });
        });

    });
}

//переход по разделам каталога
const sideCatalog = () => {
    const jsSideChapter = document.querySelectorAll('.js-side-chapter');

    jsSideChapter.forEach((item) => {

        let thisChapterLink = item.querySelectorAll('a');
        thisChapterLink.forEach((link) => {

            link.addEventListener('click', (e) => {
                e.preventDefault;
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
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

// дроп бокс селектор
const selectorDrop = () => {
    const jsDropSelector = document.querySelectorAll('.js-drop-selector');

    jsDropSelector.forEach((item) => {
        item.addEventListener('click', () => {

            if (item.classList.contains('open')) {
                item.classList.remove('open');
            } else {
                item.classList.add('open');
            }
        });

        let choise = item.querySelectorAll('.drop-box-selector__item');
        let name = item.querySelector('.drop-box-selector__name');
        choise.forEach((link) => {
            link.addEventListener('click', (e) => {
                name.innerHTML = link.innerHTML;
            });
        })

        document.addEventListener('click', (e) => {
            let target = e.target;
            let thisField = target == item || item.contains(target);
            let FildActive = item.classList.contains('open');

            if (FildActive && !thisField) {
                item.classList.remove('open');
            }
        });

        document.body.addEventListener('keyup', function (e) {
            let key = e.keyCode;
            if (key == 27) {
                item.classList.remove('open');
            };
        }, false);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    favoriteItem();
    colorChange();
    sizeChange();
    alertActive();
    colorMore();
    baseAccordion();
    sideCatalog();
    selectorDrop();
});

window.addEventListener('resize', () => {
    favoriteItem();
    colorChange();
    sizeChange();
    alertActive();
    colorMore();
    baseAccordion();
    sideCatalog();
});