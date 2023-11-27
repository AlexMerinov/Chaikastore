import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    Swiper.use([Navigation, Pagination, Parallax, Autoplay]);

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
            parallax: true,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            // },
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
                hide: true,
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
                    slidesPerView: 5.2,
                }
            }
        });
    });
});
