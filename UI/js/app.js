
var App = (function ($, undefined) {

    var objects = {
        dude: $('#dude'),
        stars: $('#stars'),
        headWrapper: $('#head-wrapper'),
        head: $('#head'),
        hair: $('#hair'),
        eyeLeft: $('#eye-left'),
        eyeRight: $('#eye-right'),
        eyeballLeft: $('#eyeball-left'),
        eyeballRight: $('#eyeball-right'),
        ears: $('#ears'),
        torso: $('#torso')
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function eyeballRightRotate() {
        TweenLite.to(objects.eyeballRight, 1, {rotation:"+=360", transformOrigin: '70px 66px', onComplete:eyeballRightRotate});
    }

    function eyeRightWiggle() {
        TweenLite.to(objects.eyeRight, 1, {rotation:"+=20", transformOrigin: '70px 66px'});
        TweenLite.to(objects.eyeRight, 1, {rotation:"-=20", transformOrigin: '70px 66px', delay:1, onComplete:eyeRightWiggle});
    }

    function eyeLeftWiggle() {
        TweenLite.to(objects.eyeLeft, 3, {rotation:"+=10", transformOrigin: '64px 59px'});
        TweenLite.to(objects.eyeLeft, 3, {rotation:"-=10", transformOrigin: '64px 59px', delay:2, onComplete:eyeLeftWiggle});
    }

    function earsWiggle() {
        TweenLite.to(objects.ears, 0.5, {rotation:"+=3", transformOrigin: '305px 96px'});
        TweenLite.to(objects.ears, 0.5, {rotation:"-=3", transformOrigin: '305px 96px', delay:3, onComplete:earsWiggle});
    }

    function headWiggle() {
        var range = getRandomInt(1, 5);
        var speed = getRandomInt(1, 3);
        var delay = getRandomInt(1, 3);
        var bounce = getRandomInt(2, 10);
        TweenLite.to(objects.head, speed, {rotation:'+=' + range, marginTop:'-=' + bounce + 'px', transformOrigin: '350px 730px'});
        TweenLite.to(objects.head, speed, {rotation:'-=' + range, marginTop:'+=' + bounce + 'px', transformOrigin: '350px 730px', delay:delay , onComplete:headWiggle});
    }

    function hairWiggle() {
        var range = getRandomInt(1, 5);
        var speed = getRandomInt(1, 3);
        var delay = getRandomInt(1, 3);
        TweenLite.to(objects.hair, speed, {rotation:'+=' + range, transformOrigin: '283px 242px'});
        TweenLite.to(objects.hair, speed, {rotation:'-=' + range, transformOrigin: '283px 242px', delay:delay , onComplete:hairWiggle});
    }

    function resize() {
        var windowHeight = $(window).height();
        var dudeHeight = objects.head.height() + objects.torso.height();
        var scale = windowHeight / dudeHeight;
        objects.headWrapper.css({transform: 'scale('+scale+')'});
        objects.torso.css({transform: 'scale('+scale+')'});
    }

    function animate() {
        eyeballRightRotate();
        eyeRightWiggle();
        eyeLeftWiggle();
        headWiggle();
        hairWiggle();
        earsWiggle();
    }

    return {
        //main method to initiate template pages
        init: function () {
            this.stars.init();

            resize();
            window.addEventListener('resize', resize, false);

            animate();
        },
    };

}(jQuery));
