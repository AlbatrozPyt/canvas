function Anim(ctx) {
  this.sprites = [];
  this.ctx = ctx;

  this.on = false;
}

Anim.prototype = {
  nextFrame: function () {
    if (!this.on) {
      return;
    }

    this.clearScreen();

    for (let s in this.sprites) {
      this.sprites[s].update();
    }

    for (let s in this.sprites) {
      this.sprites[s].draw();
    }

    const animation = this;
    requestAnimationFrame(function () {
      animation.nextFrame();
    });
  },
  newSprite: function (sprite) {
    this.sprites.push(sprite);
  },
  turnOn: function () {
    this.on = true;
    this.nextFrame();
  },
  turnOf: function () {
    this.on = false;
  },

  clearScreen: function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  },
};


// const anim = new Anim(ctx);

      // var b1 = new Bola(ctx);
      // b1.x = 100;
      // b1.y = 200;
      // b1.velocidadeX = 20;
      // b1.velocidadeY = -10;
      // b1.cor = "red";
      // b1.raio = 20;

      // var b2 = new Bola(ctx);
      // b2.x = 200;
      // b2.y = 100;
      // b2.velocidadeX = -10;
      // b2.velocidadeY = 10;
      // b2.cor = "blue";
      // b2.raio = 30;

      // anim.newSprite(b1);
      // anim.newSprite(b2);

      // anim.turnOn();