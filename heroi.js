function Heroi(ctx, keyboard, anim) {
  this.ctx = ctx;
  this.teclado = keyboard;
  this.x = 0;
  this.y = 0;
  this.anim = anim;

  this.direction = null;
}

Heroi.prototype = {
  update: function () {
    if (this.teclado.isPressed(37) && this.x > 0) {
      this.direction = 37;
      this.x -= 10;
    }

    if (this.teclado.isPressed(38) && this.y > 0) {
      this.direction = 38;
      this.y -= 10;
    }

    if (this.teclado.isPressed(39) && this.x < this.ctx.canvas.width - 20) {
      this.direction = 39;
      this.x += 10;
    }

    if (this.teclado.isPressed(40) && this.y < this.ctx.canvas.height - 20) {
      this.direction = 40;
      this.y += 10;
    }
  },
  draw: function () {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, 50, 50);
  },
  shott: function () {
    const tiro = new Bola(this.ctx);
    tiro.x = this.x + 24;
    tiro.y = this.y + 24;
    tiro.velocidadeX = 5;
    tiro.velocidadeY = 5;
    tiro.raio = 2;
    tiro.cor = "red";

    if (this.direction == 37) {
      tiro.velocidadeX -= 10;
    }

    if (this.direction == 38) {
      tiro.velocidadeY -= 10;
    }

    if (this.direction == 39) {
      tiro.velocidadeX += 10;
    }

    if (this.direction == 40) {
      tiro.velocidadeY += 10;
    }

    this.anim.newSprite(tiro);
  },
};
