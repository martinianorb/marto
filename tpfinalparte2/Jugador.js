class Jugador {
  constructor() {
    this.x = 100;          // siempre a la izquierda
    this.y = 150;          // carril del medio (los carriles son 50, 150 y 250)
    this.saltando = false;
    this.contador = 0;     // cuánto tiempo lleva en el aire
    this.ft = 0;           // para cambiar de imagen (animación)
  }

  mover() {
    // cambia de imagen de a poco
    this.ft = this.ft + 0.10;
    if (this.ft >= imagenesJugador.length) {
      this.ft = 0;
    }

    // si está saltando, cuenta el tiempo y después aterriza
    if (this.saltando == true) {
      this.contador = this.contador + 1;
      if (this.contador > 30) {
        this.saltando = false;
        this.contador = 0;
      }
    }
  }

  saltar() {
    if (this.saltando == false) {
      this.saltando = true;
    }
  }

  irArriba() {
    if (this.y > 75) {
      this.y = this.y - 100;
    }
  }

  irAbajo() {
    if (this.y < 225) {
      this.y = this.y + 100;
    }
  }

  dibujar() {
    let img = imagenesJugador[int(this.ft)];

    noStroke();
    if (this.saltando == true) {
      fill(0, 0, 0, 80);
      ellipse(this.x + 40, this.y + 95, 60, 15);  // la sombra
      image(img, this.x, this.y - 30, 80, 100);   // el personaje, más arriba
    } else {
      image(img, this.x, this.y, 80, 100);
    }
  }
}
