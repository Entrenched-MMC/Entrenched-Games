function Startup() {
  GameArea.start();
}

var GameArea = {
    canvas: document.createElement("canvas")
    start: function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.canvas = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    }
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx.fillRect(this.width, this.height, this.x, this.y);
  this.update = function() {
    ctx = GameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function updateGameArea() {
  GameArea.clear();
  GameArea.update;
}
