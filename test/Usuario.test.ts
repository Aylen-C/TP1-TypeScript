import { describe, test, expect } from "vitest";
import { Usuario } from "../src/Usuario";
import { Juego } from "../src/Juego";

describe ("Usuario", () => { 
    test("agregar un juego a la biblioteca del usuario", () => {
        const usuario = new Usuario("Aylen");
        const juego1 = new Juego("Avatar: Frontiers of Pandora", "Aventura", 23.99);
        
        usuario.agregarJuego(juego1);

        expect(usuario.verJuegosComprados()).toEqual([juego1]);
    });

    test("agregar un juego a la biblioteca del usuario", () => {
        const usuario = new Usuario("Aylen");

        const juego2 = new Juego("Red Dead Redemption 2", "Accion", 59.99);
        const juego3 = new Juego("Cyberpunk 2077", "RPG", 44.99);

        usuario.agregarJuego([juego2, juego3]);
        
        expect(usuario.verJuegosComprados()).toEqual([juego2, juego3]);
    });
    
});