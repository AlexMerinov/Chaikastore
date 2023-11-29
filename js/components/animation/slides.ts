import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Autoplay, Thumbs, EffectFade, Scrollbar } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    Swiper.use([Navigation, Pagination, Parallax, Autoplay, Thumbs, EffectFade, Scrollbar]);

    const slidersBaner = document.querySelectorAll('.js-slider-main');

    slidersBaner.forEach((slider) => {
        const swiperSlider = new Swiper(slider, {
            slidesPerView: 1,
            speed: 1000,
            loop: true,
            grabCursor: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.main-slider__pagination',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
        });
    });

    const sliderProduct = document.querySelectorAll('.js-slider-product');

    sliderProduct.forEach((slider) => {
        const productSlide = new Swiper(slider, {
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 16,

            scrollbar: {
                el: '.slider-product__scrollbar',
                draggable: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1.1,
                },
                375: {
                    slidesPerView: 1.3,
                },
                480: {
                    slidesPerView: 1.6,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2.4,
                },
                1024: {
                    slidesPerView: 3.4,
                },
                1440: {
                    slidesPerView: 4.2,
                },
                1680: {
                    slidesPerView: 6.2,
                }
            }
        });
    });


    const detailPreviewProd = () => {

        let swiperChild = new Swiper(".js-slid-product-child", {
            spaceBetween: 8,
            slidesPerView: 7,
            freeMode: true,
            watchSlidesProgress: true,
            direction: 'vertical',
        });
        let swiperParent = new Swiper(".js-slid-product-parent", {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.base-pagination',
            },
            breakpoints: {
                768: {
                    pagination: false,
                },
            },
            thumbs: {
                swiper: swiperChild,
                mousewheel: {
                    senstivity: 1,
                    eventsTarget: ".js-slid-product-child"
                },
            },


        });
    };
    detailPreviewProd();

});
