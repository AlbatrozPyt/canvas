function Persona(name, sprite, x, y, speedX, speedY, ctx) {
  this.name = name;
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.speedX = speedX;
  this.speedY = speedY;
  this.ctx = ctx;

  this.spriteWidth = 94;
  this.spriteHeight = 130;
  this.wins = 0;
}

Persona.prototype = {
  victory: function () {
    this.wins++;
  },
  update: () => {
    if (this.x < this.spriteWidth || this.x > (this.ctx.canvas.width - this.spriteWidth)) {
      this.speedX *= -1;
    }
    if (this.y < this.spriteHeight || this.y > (this.ctx.canvas.height - this.spriteHeight)) {
      this.speedY *= -1;
    }
  },
  draw: () => {
    
  }
};

