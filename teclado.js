function Teclado(el) {
  this.el = el;

  this.pressed = [];

  this.fired = [];

  this.shottFunctions = [];

  const teclado = this;

  el.addEventListener("keydown", function (e) {
    const key = e.keyCode;
    teclado.pressed[key] = true;

    if (teclado.shottFunctions[key] && !teclado.fired[key]) {
      teclado.fired[key] = true;
      teclado.shottFunctions[key]();
    }
  });

  el.addEventListener("keyup", function (e) {
    teclado.pressed[e.keyCode] = false;
    teclado.fired[e.keyCode] = false;
  });
}

Teclado.prototype = {
  isPressed: function (key) {
    return this.pressed[key];
  },
  shottFunction: function(key, callback) {
    this.shottFunctions[key] = callback;
  }
};
