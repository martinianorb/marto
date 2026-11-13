// El enemigo es Zorba: te persigue desde atrás.
class Enemigo {
  constructor() {
    this.x = -100;         // arranca afuera de la pantalla, a la izquierda
    this.y = 150;
    this.destino = -100;   // hasta dónde tiene que avanzar
    this.velocidad = 3;
  }

  acercarse() {
    // cada choque del jugador lo hace avanzar 
    this.destino = this.destino + 100;
  }

  mover() {
    // avanza de a poco hasta llegar al jugador
    if (this.x < this.destino) {
      this.x = this.x + this.velocidad;
    }
  }

  seguir(jugador) {
    // corre por el mismo carril que el jugador
    this.y = jugador.y;
  }

  dibujar() {
 
    // (después lo reemplazamos por un personaje con sprites)
    noStroke();
    fill(120, 0, 160);
    rect(this.x, this.y + 10, 80, 80);
  }
}
