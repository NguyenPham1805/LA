
/* -------------------------------------phần xử lí background body---------------------------------- */

var mainBanner = document.getElementById('main-banner')

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() <= 650) {
            mainBanner.style.overflow = 'hidden'
            mainBanner.style.backgroundSize = 'cover'
            mainBanner.style.backgroundAttachment = 'scroll'
        } else {
            mainBanner.style.backgroundAttachment = 'fixed'
            mainBanner.style.overflow = 'scroll'
        }
    })
})

/* -------------------------------------phần xử lí carousel----------------------------------------- */

$(document).ready(function () {
    var owl = $('.owl-carousel')
    owl.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        center: true,
        responsive: {
            0: {
                items: 2
            }
        }
    })
});