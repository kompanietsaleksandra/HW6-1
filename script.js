'use strict';
function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Circle(x, y, radius, color) {
    Figure.call(this);
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = color;

    this.draw = function (obg, ctx) {
        ctx.beginPath();
        ctx.arc(obg.x, obg.y, obg.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = obg.color;
        ctx.fill();
        ctx.stroke();
    }

}

function Rect(x, y, width, height, color) {
    Figure.call(this);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;

    this.draw = function (objrect, ctx) {
        ctx.fillStyle = objrect.color;
        ctx.fillRect(objrect.x, objrect.y, objrect.width, objrect.height);
    }

}

function Line(x, y, x2, y2, color) {
    Figure.call(this);
    this.x2 = x2;
    this.y2 = y2;
    this.x = x;
    this.y = y;
    this.color = color;

    this.draw = function (objline, ctx) {
        ctx.beginPath();
        ctx.moveTo(objline.x, objline.y);
        ctx.lineTo(objline.x2, objline.y2);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.strokeStyle = objline.color;
        ctx.stroke();
    }

}

function Zig(x, y, color, width) {
    Figure.call(this);
    this.width = width;
    this.x = x;
    this.y = y;
    this.color = color;

    this.draw = function (objzig, ctx) {
         ctx.lineWidth = objzig.width;
         ctx.strokeStyle = objzig.color;
         ctx.beginPath();
         ctx.moveTo(objzig.x, objzig.y);
        for (let n = 0; n < 10; n++) {
            let x1 = this.x + ((n + 1) * 60);
            let y1;

            if (n % 2 == 0) {
                y1 = this.y + 100;
            }
            else { // if n is odd...
                y1 = this.y;
            }
            ctx.lineTo(x1, y1);
        }

        ctx.stroke();
    }

}



function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    this.add = function(...objects) {
        objects.forEach( (obj) => {
            obj.draw(obj, this.ctx);
        });
    };
}
let circle = new Circle(120, 120, 50, 'rgba(0,0,255,.25)');
let rect = new Rect(260, 130, 60, 120, 'rgba(79,48,71,.15)');
let line  = new Line(0, 0, 50, 50, 'rgba(177,212,21,.25)');
let zig = new Zig(230, 215, 'red', 10);
const drawArea = new Canvas('canvas-id');
drawArea.add(rect, circle, line, zig);