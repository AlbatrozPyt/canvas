function Teclado(el) {
  this.el = el;

  this.pressed = [];

  const teclado = this;

  el.addEventListener("keydown", function (e) {
    teclado.pressed[e.keyCode] = true;
  });

  el.addEventListener("keyup", function (e) {
    teclado.pressed[e.keyCode] = false;
  });
}


Teclado.prototype = {
    isPressed: function(key) {
        return this.pressed[key];
    }
}

