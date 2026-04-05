import {describe, test, expect} from "vitest";
import {Juego} from "./Juego";

describe("Juego", () => {
    
    test("mostrar datos del juego", () => {
        const juego = new Juego("Red Dead Redemption 2", 59.99, "Accion");
        expect (juego.mostrarDatos()).toBe("Red Dead Redemption 2 - 59.99 - Accion");
    });

});