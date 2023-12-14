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
    const banner = document.querySelector('.js-banner-animate');
    if (banner) {
        const bannerheight = banner.clientHeight;
        const titleParalax = document.querySelectorAll('.js-fixed-parallax');
        const header = document.querySelector('.js-header-transparent');
        const wScroll = window.scrollY;

        let jsLayout = document.querySelector('.js-layout');
        let onePercent = bannerheight / 100;
        let percentNow = Math.round(wScroll / onePercent);

        jsLayout.style.background = `rgba(255, 255, 255, 0.${percentNow})`;


        titleParalax.forEach((title) => {
            title.style.top = -wScroll / 2 + 'px';
            if (wScroll > 0) {
                title.classList.add('fade');
            } else if (wScroll < bannerheight / 10) {
                title.classList.remove('fade');
            }
        });



        if (wScroll > 80) {
            header?.classList.remove('transparent');
            // header.style.transform = 'translate3d(0,0,0)';
        } else if (wScroll < 81) {
            // header.style.transform = 'translate3d(0,0,0)';
            header?.classList.add('transparent');
        } else {
            header?.classList.add('transparent');
            // header.style.transform = 'translate3d(0,-100%,0)';
        }
    }

}

const headerSearh = () => {
    const jsSeaarchShow = document.querySelector('.js-search-show');
    const article = document.querySelector('.article');
    const footer = document.querySelector('.footer');
    const headerSearch = document.querySelector('.header-search');
    const headerBottom = document.querySelector('.header__bottom');

    const closeSearch = () => {
        article?.classList.remove('blur');
        footer?.classList.remove('blur');
        headerSearch?.classList.remove('show');
        headerBottom.classList.remove('bg');
    }

    jsSeaarchShow?.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.closest('.header__bottom').classList.add('bg');

        headerSearch?.classList.add('show');
        article?.classList.add('blur');
        footer?.classList.add('blur');
        headerBottom.classList.add('bg');
    });


    document.addEventListener('click', (e) => {
        let target = e.target;
        let thisField = target == headerSearch || headerSearch.contains(target);
        let searchActive = headerSearch.classList.contains('show');

        if (searchActive && !thisField) {
            closeSearch();
        }
    });

    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;
        if (key == 27) {
            closeSearch();
        };
    }, false);
};


document.addEventListener('DOMContentLoaded', () => {
    fHeader();
    f100vh();
    promoHidden();
    headerSearh();
    // headerAnimate();
});

window.addEventListener('resize', () => {
    fHeader();
    f100vh();
    headerSearh();
});

window.addEventListener('load', () => {
    fHeader();
    f100vh();
    headerSearh();
    // headerAnimate();
});

window.addEventListener('scroll', () => {
    fHeader();
    headerAnimate();
});
