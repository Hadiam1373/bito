// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js'


const swiper2 = new Swiper(".mySwiper3", {
    spaceBetween: 130,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
})

const swiper3 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
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