// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js'


const swiper2 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 60,
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

const swiper3 = new Swiper(".mySwiper2", {
    modules: [Navigation, Pagination],
    autoplay: true,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 60,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 100
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
})