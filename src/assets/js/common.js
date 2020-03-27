import TypeIt from "typeit"

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
