import { slideToggle } from '@js/components/animation/toggle';
// добавление элемента в избранное
const favoriteItem = () => {
    document.body.addEventListener('click', (e) => {
        const favorite = e.target as Element;

        if (favorite !== null && favorite !== undefined) {
            if (favorite.classList.contains('js-favorite-add') || favorite.closest('.js-favorite-add')) {
                e.preventDefault();

                const addFavorite = document.querySelectorAll('.js-favorite-add')

                addFavorite.forEach((item) => {
                    if (!item.classList.contains('added') && (item === e.target || item === e.target.closest('.js-favorite-add'))) {
                        item.classList.add('added');
                    } else if (item.classList.contains('added') && (item === e.target || item === e.target.closest('.js-favorite-add'))) {
                        item.classList.remove('added');
                    }
                })
            }
        }
    });
};

// колор пикер  --- выбор цвета товара
const colorChange = () => {
    document.addEventListener('click', (e) => {
        const colorPick = document.querySelectorAll('.js-catalog-color-change');
        const colorDesc = document.querySelector('.js-color-description');

        colorPick.forEach((item) => {
            if (e.target === item) {
                colorPick.forEach((item) => {
                    item.classList.remove('active');
                });
                e.target.classList.add('active');


                if (colorDesc) {
                    if (item.classList.contains('active')) {
                        let thisColor = item.getAttribute('data-color-description');
                        colorDesc.innerHTML = thisColor;
                    }
                }
            }
        });
    })
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
                    // Eсли нужно закрывать один блок при окрытии другого
                    //
                    // tabChildArr.forEach((link) => {
                    //     link.classList.remove('open');
                    //     link.lastElementChild.style.maxHeight = 0 + 'px';
                    // });
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

//Выпадашки 
const toggleItems = () => {
    document.body.addEventListener('click', (e) => {
        const target = e.target as Element;

        if (target.classList.contains('js-item-toggle') || target.closest('.js-item-toggle')) {
            e.preventDefault();
            const link = target.classList.contains('js-item-toggle')
                ? target
                : target.closest('.js-item-toggle');

            const linkTarget = link?.nextElementSibling;
            slideToggle(link, linkTarget, 300);
        }
    });
}

// уведомление о добавлении товара в корзину
const alertActive = () => {
    const alertActive = document.querySelectorAll('.js-alert-basket');

    alertActive.forEach((item) => {

        item.addEventListener('click', () => {
            let alert = document.querySelector('.prod-alert-add');
            alert?.classList.add('visible');

            item.innerHTML = 'Товар добавлен в корзину';
            item.classList.add('disable');

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

// выбор доставки
const Delivery = () => {
    const jsChoiceDelivery = document.querySelectorAll('.js-choice-delivery');
    const delivetyItemDesc = document.querySelectorAll('.delivery-desc__item');

    jsChoiceDelivery.forEach((item) => {
        item.addEventListener('click', () => {

            jsChoiceDelivery.forEach((item) => {
                item.classList.remove('checked');
            });

            item.classList.add('checked');


            if (item.classList.contains('checked')) {
                delivetyItemDesc.forEach((desc) => {
                    if (desc.getAttribute('data-delivery') === item.getAttribute('data-delivery-id')) {
                        desc.classList.remove('hide');
                    } else {
                        desc.classList.add('hide');
                    }
                });
            }
        });
    });
}

//счетчик коллисества товаров
const counter = () => {
    const counters = document.querySelectorAll('.js-counter');
    if (!counters) return;

    counters.forEach((counter) => {
        let quantityValue = counter.querySelector('.counter__input');
        let valueBtnsMunus = counter.querySelector('.counter__btn--down');
        let valueBtnsPlus = counter.querySelector('.counter__btn--up');

        if (quantityValue.value <= 1) {
            valueBtnsMunus?.classList.add('disable');
        }

        valueBtnsMunus.addEventListener('click', function () {
            if (quantityValue.value >= 2) {
                quantityValue.value = quantityValue.value - 1;

                if (quantityValue.value < 2) {
                    valueBtnsMunus?.classList.add('disable');
                }
            }
        });

        valueBtnsPlus.addEventListener('click', function () {
            quantityValue.value = +quantityValue.value + 1;
            if (quantityValue.value > 1) {
                valueBtnsMunus?.classList.remove('disable');
            }
        });
    });
}

//добавление промокода или сертификата
const promoInOrder = () => {
    const jsSelectPromoBtn = document.querySelectorAll('.js-select-promo-btn');
    const SelectPromoField = document.querySelectorAll('.order-box__select-field');
    const jsLinkUsePromo = document.querySelectorAll('.js-link-use-promo');

    jsSelectPromoBtn.forEach((item) => {

        item.addEventListener('click', () => {
            if (item.firstElementChild.checked) {

                SelectPromoField.forEach((field) => {
                    field.classList.add('hide');
                    if (field.id === item.firstElementChild?.getAttribute('data-promo')) {
                        field.classList.remove('hide');
                    }
                });
            }
        });

    });

    jsLinkUsePromo.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault;

            item.closest('.order-box__select-input')?.nextElementSibling?.classList.remove('hide');

        });
    });
}

const addNewAddres = () => {
    const jsChoiceCity = document.querySelectorAll('.js-drop-city');

    jsChoiceCity.forEach((item) => {
        const name = item.querySelector('.drop-box-selector__name');

        item.addEventListener('click', () => {
            if (item.classList.contains('open')) {
                item.classList.remove('open');
            } else {
                item.classList.add('open');
            }
        });

        item.addEventListener('click', (e) => {
            const target = e.target as Element;
            const addressField = target.closest('.form__addres-field')?.querySelector('.new-address-field');

            if (target.classList.contains('js-add-new-address') && addressField !== null && addressField?.classList.contains('hide')) {
                addressField?.classList.remove('hide');
                name.innerHTML = 'Новый адрес';
            } else if (target.classList.contains('drop-box-selector__item')) {
                if (!addressField.classList.contains('hide')) {
                    addressField.classList.add('hide');
                    name.innerHTML = target.innerHTML;

                } else {
                    name.innerHTML = target.innerHTML;
                }

            }
        });

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

const payChoice = () => {
    document.body.addEventListener('click', (e) => {
        const target = e.target as Element;


        if (target.classList.contains('js-pay-choice') || target.closest('.js-pay-choice')) {
            e.preventDefault();
            const link = target.classList.contains('js-pay-choice')
                ? target
                : target.closest('.js-pay-choice');

            const input = link?.querySelector('input');
            const dateBox = link?.closest('.data-time')?.querySelector('.data-time__box');
            input.checked = true;

            if (input.getAttribute('data-type') === 'after') {
                dateBox.style.display = 'block';
            } else {
                dateBox.style.display = 'none';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    favoriteItem();
    colorChange();
    sizeChange();
    alertActive();
    baseAccordion();
    sideCatalog();
    selectorDrop();
    Delivery();
    counter();
    promoInOrder();
    toggleItems();
    addNewAddres();
    payChoice();
});