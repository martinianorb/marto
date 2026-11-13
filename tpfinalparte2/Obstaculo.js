class Obstaculo {
  constructor() {
    this.tam = 25;
    this.velocidad = 5;
    this.reaparecer();
  }

  reaparecer() {
    // aparece a la derecha, afuera de la pantalla
    this.x = 800 + random(0, 400);

    // elige un carril al azar: 50, 150 o 250 (igual que el jugador)
    this.y = 50 + int(random(0, 3)) * 100;
  }

  mover() {
    this.x = this.x - this.velocidad;
  }

  dibujar() {
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y + 37, this.tam, this.tam);
  }

  chocaCon(jugador) {
    // si el jugador está saltando, lo esquiva
    if (jugador.saltando == true) {
      return false;
    }

    // si está en otro carril, no choca
    if (this.y != jugador.y) {
      return false;
    }

    // si coincide en la horizontal, choca
    if (this.x < jugador.x + 70 && this.x + this.tam > jugador.x + 30) {
      return true;
    }

    return false;
  }

  salio() {
    // true si ya salió por la izquierda
    return this.x < -this.tam;
  }
}
