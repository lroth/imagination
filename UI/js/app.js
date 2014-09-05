
var App = (function ($, undefined) {

    var objects = {
        dude: $('#dude'),
        stars: $('#stars'),
        headWrapper: $('#head-wrapper'),
        head: $('#head'),
        topTeeth: $('#top-teeth'),
        topTeethSparkle: $('#top-teeth-sparkle'),
        hair: $('#hair'),
        actualMouth: $('#actual-mouth'),
        eyeLeft: $('#eye-left'),
        eyelashLeft: $('#eyelash-left'),
        eyeRight: $('#eye-right'),
        eyeballLeft: $('#eyeball-left'),
        eyeballRight: $('#eyeball-right'),
        ears: $('#ears'),
        sideTeeth: $('#side-teeth'),
        sideTeethSparkle: $('#side-teeth-sparkle'),
        torso: $('#torso'),
        zipperLeft: $('#zipper-left'),
        zipperRight: $('#zipper-right'),
        zipperTeeth: $('#zipper-teeth')
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function topTeethMovement() {
        TweenLite.to(objects.topTeeth, 1, {marginTop:'+=5'});
        TweenLite.to(objects.topTeeth, 1, {marginTop:'-=5', delay:3, onComplete:topTeethMovement});
    }

    function teethSparkle(teeth) {

        var delay = getRandomInt(5, 10);

        var tl = new TimelineLite({onComplete:function(){
            teethSparkle(teeth);
        }, delay: delay});

        tl.add(TweenLite.fromTo(
            teeth, .5,
            {css:{scale:0, opacity:.0, rotation: 0}, ease: Linear.easeNone},
            {css:{scale:.7, opacity:.8, rotation: 180}, ease: Linear.easeNone}
        ));

        tl.add(TweenLite.to(
            teeth, .5,
            {css:{rotation: 360}, ease: Linear.easeNone}
        ));

        tl.add(TweenLite.to(
            teeth, .5,
            {css:{scale:0, opacity:0, rotation: 540}, ease: Linear.easeNone}
        ));

        tl.play();
        // TweenLite.to(objects.topTeethSparkle, 1, {rotation:'+=360', scale: 0.5, delay:5});
        // TweenLite.to(objects.topTeethSparkle, 1, {rotation:'-=360', scale: 0.1, onComplete:topTeethSparkle});
    }

    function sideTeethMovement() {
        TweenLite.to(objects.sideTeeth, 1, {marginLeft:'+=5'});
        TweenLite.to(objects.sideTeeth, 1, {marginLeft:'-=5', delay:2, onComplete:sideTeethMovement});
    }

    function eyeballRightRotate() {
        TweenLite.to(objects.eyeballRight, 1, {rotation:'+=360', transformOrigin: '70px 66px', onComplete:eyeballRightRotate});
    }

    function eyeRightWiggle() {
        TweenLite.to(objects.eyeRight, 1, {rotation:'+=20', transformOrigin: '70px 66px'});
        TweenLite.to(objects.eyeRight, 1, {rotation:'-=20', transformOrigin: '70px 66px', delay:1, onComplete:eyeRightWiggle});
    }

    function eyeLeftWiggle() {
        TweenLite.to(objects.eyeLeft, 3, {rotation:'+=10', transformOrigin: '64px 59px'});
        TweenLite.to(objects.eyeLeft, 3, {rotation:'-=10', transformOrigin: '64px 59px', delay:2, onComplete:eyeLeftWiggle});
    }

    function earsWiggle() {
        TweenLite.to(objects.ears, 0.5, {rotation:'+=3', transformOrigin: '305px 96px'});
        TweenLite.to(objects.ears, 0.5, {rotation:'-=3', transformOrigin: '305px 96px', delay:3, onComplete:earsWiggle});
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

    function actualMouthScale() {

        var tl = new TimelineLite({onComplete:actualMouthScale});

        tl.add(TweenLite.to(objects.actualMouth, .5,{css:{scale:1}, ease: Linear.easeNone}));
        tl.add(TweenLite.to(objects.actualMouth, .5,{css:{scale: 0.9}, ease: Linear.easeNone}));

        tl.play();
    };

    function zipperLeft() {
        var tl = new TimelineLite({onComplete:zipperLeft});

        tl.add(TweenLite.to(objects.zipperLeft, .5,{rotation: '-=0.15rad', ease: Linear.easeNone}));
        tl.add(TweenLite.to(objects.zipperLeft, .5,{rotation: '0', ease: Linear.easeNone}));

        tl.play();
    }

    function zipperRight() {
        var tl = new TimelineLite({onComplete:zipperRight});

        tl.add(TweenLite.to(objects.zipperRight, .5,{rotation: '+=0.15rad', transformOrigin: '0 -px', ease: Linear.easeNone}));
        tl.add(TweenLite.to(objects.zipperRight, .5,{rotation: '0', transformOrigin: '0 -5px', ease: Linear.easeNone}));

        tl.play();
    }

    function zipperTeeth() {
        var tl = new TimelineLite({onComplete:zipperTeeth});

        tl.add(TweenLite.to(objects.zipperTeeth, .5,{css: {width: '-=60px'}, ease: Linear.easeNone}));
        tl.add(TweenLite.to(objects.zipperTeeth, .5,{css: {width: '+=60px'}, ease: Linear.easeNone}));

        tl.play();
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
        //actualMouthScale();
        topTeethMovement();
        sideTeethMovement();
        teethSparkle(objects.topTeethSparkle);
        teethSparkle(objects.sideTeethSparkle);
    }

    return {
        //main method to initiate template pages
        init: function () {
            this.stars.init();

            resize();
            window.addEventListener('resize', resize, false);

            this.eyelash.init();
            animate();
            zipperLeft();
            zipperRight();
            zipperTeeth();
        },
    };

}(jQuery));
