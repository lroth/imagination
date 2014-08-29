// based on http://timothypoon.com/blog/demos/canvas-particle-parallax/

App.stars = (function ($, undefined) {

    var options = {
        container: null,
        width: null,
        height: null,
        canvas: null,
        con: null,
        g: null,
        pxs: new Array(),
        rint: 60
    };

    function draw() {
        options.con.clearRect(0, 0, options.width, options.height);
        for(var i = 0; i < options.pxs.length; i++) {
            options.pxs[i].fade();
            options.pxs[i].move();
            options.pxs[i].draw();
        }
    }

    function Circle() {
        this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

        this.reset = function() {
            this.x = (this.s.random ? options.width * Math.random() : this.s.xdef);
            this.y = (this.s.random ? options.height * Math.random() : this.s.ydef);
            this.r = ((this.s.rmax-1)*Math.random()) + 1;
            this.dx = (Math.random()*this.s.xmax) * (Math.random() < .5 ? -1 : 1);
            this.dy = (Math.random()*this.s.ymax) * (Math.random() < .5 ? -1 : 1);
            this.hl = (this.s.ttl/options.rint)*(this.r/this.s.rmax);
            this.rt = Math.random()*this.hl;
            this.s.rt = Math.random()+1;
            this.stop = Math.random()*.2+.4;
            this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
            this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        }

        this.fade = function() {
            this.rt += this.s.rt;
        }

        this.draw = function() {
            if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
            else if(this.rt >= this.hl) this.reset();
            var newo = 1-(this.rt/this.hl);
            options.con.beginPath();
            options.con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
            options.con.closePath();
            var cr = this.r*newo;
            options.g = options.con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
            options.g.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
            options.g.addColorStop(this.stop, 'rgba(77,101,181,'+(newo*.6)+')');
            options.g.addColorStop(1.0, 'rgba(77,101,181,0)');
            options.con.fillStyle = options.g;
            options.con.fill();
        }

        this.move = function() {
            this.x += (this.rt/this.hl)*this.dx;
            this.y += (this.rt/this.hl)*this.dy;
            if(this.x > options.width || this.x < 0) this.dx *= -1;
            if(this.y > options.height || this.y < 0) this.dy *= -1;
        }

        this.getX = function() { return this.x; }
        this.getY = function() { return this.y; }
    }

    function fill() {
        for(var i = 0; i < 400; i++) {
            options.pxs[i] = new Circle();
            options.pxs[i].reset();
        }
    }

    function animate() {
      requestAnimationFrame(animate);
      draw();
    }

    function resize() {
         $(options.container).attr('width', options.width).attr('height',options.height);
         $(options.canvas).attr('width', options.width).attr('height',options.height);
    }

    return {
        init: function() {
            options.width = window.innerWidth;
            options.height = window.innerHeight;
            options.container = document.getElementById('container');
            options.canvas = document.getElementById('stars');
            options.con = options.canvas.getContext('2d');
            resize();
            window.addEventListener('resize', resize, false);
            fill();
            animate();
        }
    };
})(jQuery);
