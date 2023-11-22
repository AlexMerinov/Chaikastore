const fHeader = () => {
    const wintop = window.scrollY;
    const header = document.querySelector('.header');
    if (typeof header !== 'undefined' && header != null) {
        if (
            !document.body.classList.contains('modal-show') &&
            !document.body.classList.contains('menu-show')
        ) {
            if (wintop > 20) {
                header.classList.add('header--fixed');
            } else {
                header.classList.remove('header--fixed');
            }
        }
    }
};

const f100vh = () => {
    const bodyHeight = document.body.offsetHeight;
    document.body.style.setProperty('--vh-100', `${bodyHeight}px`);
};

const promoHidden = () => {
    const btnPromoClose = document.querySelector('.js-close-promo-header');
    btnPromoClose.addEventListener('click', () => {
        btnPromoClose.closest('.header').classList.add('promo-hidden');
    });
};


const headerAnimate = () => {
    const bannerheight = document.querySelector('.section.paralax').clientHeight;
    const header = document.querySelector('.header');
    const wScroll = window.scrollY;

    if (wScroll > bannerheight - 30) {
        header?.classList.remove('transparent');
        header?.classList.add('fix');
    } else {
        header?.classList.add('transparent');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fHeader();
    f100vh();
    promoHidden();
    headerAnimate();
});

window.addEventListener('resize', () => {
    fHeader();
    f100vh();
});

window.addEventListener('load', () => {
    fHeader();
    f100vh();
    headerAnimate();
});

window.addEventListener('scroll', () => {
    fHeader();
    headerAnimate();
});
