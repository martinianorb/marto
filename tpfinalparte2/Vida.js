class Vida {
  constructor() {
    this.cantidad = 2;    // 2 vidas: al segundo choque, Zorba te atrapa
  }

  perder() {
    this.cantidad = this.cantidad - 1;
  }

  sinVidas() {
    // true si ya no quedan vidas
    return this.cantidad <= 0;
  }

  dibujar() {
    // un círculo rojo por cada vida que queda
    noStroke();
    fill(255, 0, 0);
    for (let i = 0; i < this.cantidad; i++) {
      ellipse(740 + i * 40, 25, 25, 25);
    }
  }
}
