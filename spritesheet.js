function Spritesheet(ctx, img, l, c) {
  this.ctx = ctx;
  this.img = img;
  this.numL = l;
  this.numC = c;
  this.intervalo = 0;
  this.ultimoTempo = 0;
  this.linha = 0;
  this.coluna = 0;
}

Spritesheet.prototype = {
  nextFrame: function () {
    const now = new Date().getTime();

    if (!this.ultimoTempo) {
      this.ultimoTempo = now;
    }

    if (now - this.ultimoTempo < this.intervalo) return;

    if (this.coluna < this.numC - 1) {
      this.coluna++;
    } else {
      this.coluna = 0;
    }

    this.ultimoTempo = now;
  },
  draw: function (x, y) {
    const width = this.img.width / this.numC;
    const height = this.img.height / this.numL;

    this.ctx.drawImage(
        this.img,
        width * this.coluna,
        height * this.linha,
        width,
        height,
        x,
        y,
        width,
        height
    );
  },
};
