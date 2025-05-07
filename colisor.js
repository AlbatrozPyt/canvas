function Colisor() {
  this.sprites = [];
  this.aoColidir = null;
}

Colisor.prototype = {
  newSprite: function (sprite) {
    this.sprites.push(sprite);
  },
  unique: function (sprite) {
    let str = "";
    const retangulos = sprite.retangulosColisao();

    for (let i in retangulos) {
      str +=
        "x:" +
        retangulos[i].x +
        ",y:" +
        retangulos[i].y +
        ",l:" +
        retangulos[i].largura +
        ",a:" +
        retangulos[i].altura +
        " \n";
    }

    return str;
  },
  process: function () {
    let testados = new Object();

    for (let i in this.sprites) {
      for (let j in this.sprites) {
        if (i == j) {
          continue;
        }

        let id1 = this.unique(this.sprites[i]);
        let id2 = this.unique(this.sprites[j]);

        if (!testados[id1]) {
          testados[id1] = [];
        }
        if (!testados[id2]) {
          testados[id2] = [];
        }

        if (
          !testados[id1].indexOf(id2) >= 0 ||
          testados[id2].indexOf(id1) >= 0
        ) {
          this.testarColisao(this.sprites[i], this.sprites[j]);
        }

        testados[id1].push(id2);
        testados[id2].push(id1);
      }
    }
  },
  retangulosColidem: function (ret1, ret2) {
    return (
      ret1.x + ret1.largura > ret2.x &&
      ret1.x < ret2.x + ret2.largura &&
      ret1.y + ret1.altura > ret2.y &&
      ret1.y < ret2.y + ret2.altura
    );
  },
  testarColisao: function (sprite1, sprite2) {
    const r1 = sprite1.retangulosColisao();
    const r2 = sprite2.retangulosColisao();

    colisoes: for (let i in r1) {
      for (let j in r2) {
        if (this.retangulosColidem(r1[i], r2[j])) {
          sprite1.colidiuCom(sprite2);
          sprite2.colidiuCom(sprite1);

          if (this.aoColidir) {
            this.aoColidir(sprite1, sprite2);
          }

          break colisoes;
        }
      }
    }
  },
};
