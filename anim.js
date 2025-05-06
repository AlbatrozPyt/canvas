function Anim(ctx) {
    this.sprites = [];
    this.ctx = ctx;

    this.on = false;
};

Anim.prototype = {
    newSprite: (sprite) => {
        this.sprites.push(sprite);
    },
    turnOn: () => {
        this.on = true;
        this.nextFrame();
    },
    turnOf: () => {
        this.on = false;
    },
    nextFrame: () => {
        if (!this.on) {
            return;
        }

        this.clearScreen();

        for (let s in this.sprites) {
            this.sprites[s].update();
        }

        const animation = this;
        requestAnimationFrame(() => animation.nextFrame());
    },
    clearScreen: () => {
        ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
};
