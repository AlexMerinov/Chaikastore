import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Autoplay, Thumbs, EffectFade, Scrollbar, Zoom, Keyboard, Mousewheel } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    Swiper.use([Navigation, Pagination, Parallax, Autoplay, Thumbs, EffectFade, Scrollbar, Zoom, Keyboard, Mousewheel]);

    const slidersBaner = document.querySelectorAll('.js-slider-main');

    slidersBaner.forEach((slider) => {
        const swiperSlider = new Swiper(slider, {
            slidesPerView: 1,
            speed: 1000,
            loop: true,
            grabCursor: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
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
            slidesPerView: 'auto',
            spaceBetween: 16,
            speed: 500,
            loop: false,
            grabCursor: true,

            scrollbar: {
                el: '.slider-product__scrollbar',
                draggable: true,
            },
        });
    });


    const detailPreviewProd = () => {

        const swiperParent = document.querySelectorAll('.js-slid-product-parent');
        swiperParent.forEach((slider) => {
            let swiperSlderThumb = null;
            const parent = slider.closest('.product__preview-gallery');
            const thisModalBox = parent?.querySelector('.modal');

            const thumb = parent?.querySelector('.js-slid-product-child');
            if (thumb !== null && thumb !== undefined) {
                swiperSlderThumb = new Swiper(thumb, {
                    spaceBetween: 8,
                    slidesPerView: 'auto',
                    freeMode: true,
                    watchSlidesProgress: true,
                    direction: 'vertical',
                    watchSlidesProgress: true,
                    mousewheel: {
                        sensitivity: 1,
                        eventsTarget: '.js-slid-product-child',
                    }
                });
            }

            const swiperSlder = new Swiper(slider, {
                slidesPerView: 1,
                effect: 'fade',
                watchSlidesProgress: true,
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
                on: {
                    activeIndexChange(swiper: any) {
                        if (!thisModalBox?.classList.contains('is-open')) {
                            const sliderSwiper = thisModalBox.querySelector('.js-slider-lightbox');
                            sliderSwiper?.swiper.slideTo(swiper.realIndex);
                        }
                    },
                },
                thumbs: {
                    swiper: swiperSlderThumb,
                    mousewheel: {
                        senstivity: 1,
                        eventsTarget: ".js-slid-product-child"
                    },
                },
            });

        });


        const slidersLightBox = document.querySelectorAll('.js-slider-lightbox');
        slidersLightBox.forEach((slider) => {
            const parent = slider.closest('.product__preview-gallery');
            const thisModalBox = parent?.querySelector('.modal');


            const swiperSlider = new Swiper(slider, {
                slidesPerView: 1,
                speed: 700,
                spaceBetween: 16,
                centeredSlides: true,
                slideToClickedSlide: true,
                keyboard: {
                    enabled: true,
                },
                zoom: {
                    maxRatio: 3,
                },
                navigation: {
                    nextEl: '.custom-slider-btn--next',
                    prevEl: '.custom-slider-btn--prev',
                },
                on: {
                    activeIndexChange(swiper: any) {
                        if (thisModalBox?.classList.contains('is-open')) {
                            const sliderSwiper = parent.querySelector('.js-slid-product-parent');
                            sliderSwiper?.swiper.slideTo(swiper.realIndex);
                        }
                    },
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1.7,
                    },
                    1440: {
                        slidesPerView: 2.2,
                    },
                }
            });
        });
    };
    detailPreviewProd();

});
