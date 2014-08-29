
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
        blp: {x: 8, y: null},
        brp: {x: 117, y: null}
    };

    var draw = function() {
        options.con.clearRect(0, 0, options.width, options.height);

        options.blp.y = options.currentY;
        options.brp.y = options.currentY;

        options.con.beginPath();
        options.con.moveTo(options.begining.x, options.begining.y);
        options.con.bezierCurveTo(options.tlp.x, options.tlp.y, options.trp.x, options.trp.y, options.end.x, options.end.y);
        options.con.bezierCurveTo(options.brp.x, options.brp.y, options.blp.x, options.blp.y, options.begining.x, options.begining.y);

        options.con.fillStyle = 'blue';
        options.con.fill();

        // line color
        options.con.strokeStyle = 'red';
        options.con.lineWidth = 5;
        options.con.stroke();

    }

    return {
        init: function() {

            options.canvas = document.getElementById('eyelash-left');
            options.con = options.canvas.getContext('2d');

            options.width = parseInt($(options.canvas).css('width'), 10);
            options.height = parseInt($(options.canvas).css('height'), 10);

            $(options.canvas).attr('width', options.width).attr('height', options.height);

            options.currentY = options.openY;

            draw();
        }
    };

})(jQuery);
