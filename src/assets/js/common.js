import TypeIt from "typeit"
import 'slick-carousel/slick/slick';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

// ====================================================
// Typed text
// ====================================================
if (document.getElementById('typeit')) {
    new TypeIt('#typeit', {
            speed: 100,
            loop: true,
        })
        .type("Followers!")
        .pause(1000)
        .delete()
        .type("Friends!")
        .pause(1000)
        .delete()
        .type("Users!")
        .pause(4000)
        .go();
}

// ====================================================
// Carusel
// ====================================================
const slider = $('#main-slider');

if (slider) {

    slider.slick({
        arrows: false,
        speed: 350,
        variableWidth: true,
        touchThreshold: 20,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
}

// ====================================================
// selectpicker
// ====================================================
const selectpicker = $('.selectpicker');
if (selectpicker) {
    selectpicker.selectpicker();
}