// import Swiper JS
import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper styles
import 'swiper/css';
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js'

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 60,
    Pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});

const swiper2 = new Swiper(".carousel", {
    spaceBetween: 130,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
})



let slides = [
    {
        img: 'public/image/most_of_currencies.svg',
        title: 'On Your Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus, amet cum dolor'
    },
    {
        img: 'public/image/icon_bito.svg',
        title: 'On Your Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus, amet cum dolor'
    },
    {
        img: 'public/image/security.svg',
        title: 'On Your Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus, amet cum dolor'
    },
    {
        img: 'public/image/most_of_currencies.svg',
        title: 'On Your Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus, amet cum dolor'
    },
    {
        img: 'public/image/icon_bito.svg',
        title: 'On Your Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus, amet cum dolor'
    },
    {
        img: 'public/image/security.svg',
        title: 'On Your Website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus, amet cum dolor'
    },
]
const runSlide = function () {
    let wrapperSlider = document.getElementById('wrapper');

    for (let i = 0; i <= slides.length; i++) {
        let slider = document.createElement('div');
        slider.className = 'swiper-slide'
        slider.innerHTML = `
                    <div class=" d-flex align-items-center justify-content-center">
                        <img class="img-carousel" src="${slides[i].img}" alt=''>
                    </div>
                    <span class="title-carousel">${slides[i].title}</span>
                    <p class="text-carousel mt-3">
                        ${slides[i].text}
                    </p>
    `
        wrapperSlider.appendChild(slider)
    }

}
runSlide()
