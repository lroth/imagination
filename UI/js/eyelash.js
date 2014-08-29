
App.eyelash = (function ($, undefined) {

    var options = {
        canvas: null,
        con: null,
        width: null,
        height: null,
        begining: {x: 8, y: 60},
        end: {x: 117, y: 60},
        tlp: {x: 8, y: -16},
        trp: {x: 117, y: -16},
        openY: 10,
        closedY: 130,
        currentY: null,
        step: 4,
        mode: 'close',
        blp: {x: 8, y: null},
        brp: {x: 117, y: null}
    };

    function draw() {
        options.con.clearRect(0, 0, options.width, options.height);

        if (options.currentY >= options.closedY) {
            options.mode = 'open';
        } else if (options.currentY <= options.openY) {
            options.mode = 'close';
        }

        if ('open' === options.mode) {
            options.currentY -= options.step;
        } else if ('close' === options.mode) {
            options.currentY += options.step;
        }

        options.blp.y = options.currentY;
        options.brp.y = options.currentY;

        options.con.beginPath();
        options.con.moveTo(options.begining.x, options.begining.y);
        options.con.bezierCurveTo(options.tlp.x, options.tlp.y, options.trp.x, options.trp.y, options.end.x, options.end.y);
        options.con.bezierCurveTo(options.brp.x, options.brp.y, options.blp.x, options.blp.y, options.begining.x, options.begining.y);

        options.con.fillStyle = '#db9f6c';
        options.con.fill();

        // line color
        options.con.strokeStyle = '#252727';
        options.con.lineWidth = 6;
        options.con.stroke();

    }

    function animate() {
      requestAnimationFrame(animate);
      draw();
    }

    return {
        init: function() {

            options.canvas = document.getElementById('eyelash-left');
            options.con = options.canvas.getContext('2d');

            options.width = parseInt($(options.canvas).css('width'), 10);
            options.height = parseInt($(options.canvas).css('height'), 10);

            $(options.canvas).attr('width', options.width).attr('height', options.height);

            options.currentY = options.openY;

            animate();
        }
    };

})(jQuery);
