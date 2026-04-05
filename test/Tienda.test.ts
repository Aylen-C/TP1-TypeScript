import {describe, test, expect} from "vitest";
import {Juego} from "../src/Juego";
import {Tienda} from "../src/Tienda";

describe ("Tienda", () => { 
    test("agregar juego a la tienda", () => {
    
        const tienda = new Tienda();
        const juego1 = new Juego("Avatar: Frontiers of Pandora", 23.99, "Aventura");
        
        tienda.agregarJuego(juego1);

        expect(tienda.buscarJuego("Avatar: Frontiers of Pandora")).toEqual([juego1]);
    });
});