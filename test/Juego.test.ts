import {describe, test, expect} from "vitest";
import { Juego } from "../src/Juego";

describe("Juego", () => {
    
    test("mostrar datos del juego", () => {
        const juego = new Juego("Red Dead Redemption 2", "Accion", 59.99);
        expect (juego.mostrarDatos()).toBe("Red Dead Redemption 2 - Accion - 59.99");
    });

});