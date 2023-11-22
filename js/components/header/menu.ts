import { slideToggle } from '@js/components/animation/toggle';
import { forEach } from 'lodash-es';

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

    const menuShow = () => {
        const { body } = document;
        const jsMenuOpen = document.querySelector('.js-menu-open');
        let wintop = 0;

        jsMenuOpen?.addEventListener('click', (e) => {
            e.preventDefault();
            if (!body.classList.contains('menu-show')) {
                e.target.closest('.header__bottom').classList.add('bg');
                jsMenuOpen.classList.add('active');
                wintop = window.scrollY;
                body.classList.add('menu-show');
                body.style.top = `-${wintop}px`;
                body.style.setProperty('--wintop', `${wintop}px`);
            } else {
                e.target.closest('.header__bottom').classList.remove('bg');
                jsMenuOpen.classList.remove('active');
                body.classList.remove('menu-show');
                window.scroll(0, wintop);
                body.style.removeProperty('top');
                body.style.removeProperty('--wintop');
            }
        });

        if (document.documentElement.clientWidth > 1023 && body.classList.contains('menu-show')) {
            body.classList.remove('menu-show');
            jsMenuOpen.classList.remove('active');
            jsMenuOpen.closest('.header__bottom').classList.remove('bg');
        }
    }



    const jsOpenMenuList = document.querySelectorAll('.js-menu-arr');

    jsOpenMenuList.forEach((link) => {

        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (link.closest('li').classList.contains('open')) {
                link.classList.remove('active');
                link.closest('li').classList.remove('open');
            } else {
                link.classList.add('active');
                link.closest('li').classList.add('open');
            }

        });
    });

    const hoverMenu = () => {
        const jsMenuItemDrop = document.querySelectorAll('.js-menu-item-drop');
        jsMenuItemDrop.forEach((item) => {
            item.addEventListener('mouseenter', (e) => {
                if (document.documentElement.clientWidth > 1023) {
                    e.target.closest('.header__bottom').classList.add('bg');
                }
            });

            item.addEventListener('mouseleave', (e) => {
                if (document.documentElement.clientWidth > 1023) {
                    e.target.closest('.header__bottom').classList.remove('bg');
                }
            });
        });
    }

    window.addEventListener('resize', () => {
        hoverMenu();
        menuShow();
    });

    window.addEventListener('load', () => {
        hoverMenu();
        menuShow();
    });

});
