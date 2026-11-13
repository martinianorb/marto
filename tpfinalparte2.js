// SKETCH: solo crea el juego y lo hace funcionar.
// Todo lo demás pasa adentro de la clase Juego.

let juego;
let imagenFondo;
let imagenesJugador = [];

function preload() {
  imagenFondo = loadImage("data/fondo.png");

  imagenesJugador[0] = loadImage("data/jugador0.png");
  imagenesJugador[1] = loadImage("data/jugador1.png");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}

function mousePressed() {
  juego.clickMouse();
}
