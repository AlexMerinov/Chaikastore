import { slideToggle } from '@js/components/animation/toggle';

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.js-menu-toggle');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (window.matchMedia('(max-width: 1279px)').matches) {
                e.preventDefault();
                const target = link.nextElementSibling;
                slideToggle(link, target, 300);
            }
        });
    });

    const jsMoreMenu = document.querySelectorAll('.js-menu-more');
    jsMoreMenu.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.header-menu__more').classList.add('hide');
            
        });     
    });

    const { body } = document;
    const jsMenuOpen = document.querySelectorAll('.js-menu-open');
    let wintop = 0;

    jsMenuOpen.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (!body.classList.contains('menu-show')) {
                link.classList.add('active');
                wintop = window.scrollY;
                body.classList.add('menu-show');
                body.style.top = `-${wintop}px`;
                body.style.setProperty('--wintop', `${wintop}px`);
            } else {
                link.classList.remove('active');
                body.classList.remove('menu-show');
                window.scroll(0, wintop);
                body.style.removeProperty('top');
                body.style.removeProperty('--wintop');
            }
        });
    });
});
