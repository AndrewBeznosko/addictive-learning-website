import TypeIt from "typeit"
import 'slick-carousel/slick/slick';

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

const slider = $('#main-slider');

if (slider) {
    
    slider.slick({
        arrows: false,
        speed: 350,
        variableWidth: true,
        touchThreshold: 20
    });

    let wheeling = false,
        counter1 = 0, 
        counter2;

    slider.on('wheel', (function(e) {
      e.preventDefault();
      counter1 += 1;
      
      if (wheeling == false) {
        wheeling = true;
        wheelAct();
        if (e.originalEvent.deltaY < 0) {
           $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
      }  
    }));

    function wheelAct(){
        counter2 = counter1;
        setTimeout(function(){
            if (counter2 == counter1) {
                wheelEnd();
            } else {
                wheelAct();
            }
        },30);
    }
    function wheelEnd(){
        wheeling = false;
        counter1 = 0;
        counter2 = false;
    }
}
