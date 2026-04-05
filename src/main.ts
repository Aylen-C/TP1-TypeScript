import {Juego} from "./Juego";
import {Tienda} from "./Tienda";
import {Usuario} from "./Usuario";

const tienda = new Tienda();
const usuario = new Usuario("Aylen");

const juego1 = new Juego("Avatar: Frontiers of Pandora", "Aventura", 23.99);
const juego2 = new Juego("Red Dead Redemption 2", "Accion", 59.99);
const juego3 = new Juego("Cyberpunk 2077", "RPG", 44.99);
const juego4 = new Juego("Hogwarts Legacy", "RPG", 30.00);

tienda.agregarJuego(juego1);
tienda.agregarJuego(juego2);
tienda.agregarJuego(juego3);
tienda.agregarJuego(juego4);

console.log(tienda.buscarJuego("Cyberpunk 2077"));
console.log(tienda.comprarJuego(usuario, juego3));
console.log(usuario.verJuegosComprados());