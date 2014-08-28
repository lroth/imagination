
var App = (function ($, undefined) {

    var objects = {
        head: $('#head'),
        hair: $('#hair'),
        eyeLeft: $('#eye-left'),
        eyeRight: $('#eye-right'),
        eyeballLeft: $('#eyeball-left'),
        eyeballRight: $('#eyeball-right'),
        ears: $('#ears')
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
    }

    function earsWiggle() {
        TweenLite.to(objects.ears, 0.5, {rotation:"+=3", transformOrigin: '305px 96px'});
        TweenLite.to(objects.ears, 0.5, {rotation:"-=3", transformOrigin: '305px 96px', delay:3, onComplete:earsWiggle});
    }

    function headWiggle() {
        var range = getRandomInt(1, 5);
        var speed = getRandomInt(1, 3);
        var delay = getRandomInt(1, 3);
        TweenLite.to(objects.head, speed, {rotation:'+=' + range, transformOrigin: '350px 730px'});
        TweenLite.to(objects.head, speed, {rotation:'-=' + range, transformOrigin: '350px 730px', delay:delay , onComplete:headWiggle});
    }

    function hairWiggle() {
        var range = getRandomInt(1, 5);
        var speed = getRandomInt(1, 3);
        var delay = getRandomInt(1, 3);
        TweenLite.to(objects.hair, speed, {rotation:'+=' + range, transformOrigin: '283px 242px'});
        TweenLite.to(objects.hair, speed, {rotation:'-=' + range, transformOrigin: '283px 242px', delay:delay , onComplete:hairWiggle});
    }

    function animate() {
        eyeballRightRotate();
        eyeRightWiggle();
        headWiggle();
        hairWiggle();
        earsWiggle();

        // TweenMax.to($('#eyeball-right') , 2, {rotation:360, transformOrigin:"70px 66px", repeat:true, repeatDelay:0, ease:Linear.easeNone});

    }

    return {
        //main method to initiate template pages
        init: function () {
            this.stars.init();
            animate();
        },
    };

}(jQuery));
