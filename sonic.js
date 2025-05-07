function Sonic(ctx, teclado, img) {
    this.ctx = ctx;
    this.teclado = teclado;
    this.img = img;
    this.x = 0;
    this.y = 0;

    this.sheet = new Spritesheet(this.ctx, this.img, 9, 15);
    this.sheet.intervalo = 60;

    this.andando = false;
    this.direcao = 1;

    this.velocidade = 10;
}

Sonic.prototype = {
    update: function() {
        if(this.teclado.isPressed(39)) {
            if (!this.andando || this.direcao != 1) {
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = 1;

            this.sheet.nextFrame();
            this.x += this.velocidade;
        }

        else if(this.teclado.isPressed(37)) {
            if (!this.andando || this.direcao != 2) {
                this.sheet.linha = 6;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = 2;

            this.sheet.nextFrame();
            this.x -= this.velocidade;
        }

        else {
            if (this.direcao == 1) {
                this.sheet.coluna = 0;
            }
            else if (this.direcao == 2){
                this.sheet.coluna = 1;
            }

            this.sheet.linha = 0;
            this.andando = false;
        }
    },
    draw: function() {
        this.sheet.draw(this.x, this.y);
    }
}