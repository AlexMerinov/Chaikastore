import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    Swiper.use([Navigation, Pagination, Parallax, Autoplay]);

    const sliders = document.querySelectorAll('.js-slider-main');

    sliders.forEach((slider) => {
        const swiperSlder = new Swiper(slider, {
            slidesPerView: 1,
            speed: 1000,
            loop: true,
            grabCursor: true,
            // autoplay: {
            //     delay: 7000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            // },
        });
    });
});
