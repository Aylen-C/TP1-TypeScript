import {describe, test, expect} from "vitest";
import {Juego} from "../src/Juego";
import {Tienda} from "../src/Tienda";
import {Usuario} from "../src/Usuario";

describe ("Tienda", () => { // prueba para agregar un juego a la tienda/catalogo
    
    test("agregar juego a la tienda", () => {
    
        const tienda = new Tienda();
        const juego1 = new Juego("Avatar: Frontiers of Pandora", "Aventura", 23.99, "Un juego de aventura y mundo abierto", "avatar.jpg");
        
        tienda.agregarJuego(juego1); // agrega el juego al catalogo

        // busca el juego por nombre y compara el resultado con el juego agregado
        expect(tienda.buscarJuego("Avatar: Frontiers of Pandora")).toEqual([juego1]);
    });


    test("Mostrar juegos disponibles", () => {
        const tienda = new Tienda();
        const juego1 = new Juego("Red Dead Redemption 2", "Accion", 59.99, "Un western epico", "rdr2.jpg");
        const juego2 = new Juego("Cyberpunk 2077", "RPG", 44.99, "Futuro distopico", "cp77.jpg");

        tienda.agregarJuego(juego1);
        tienda.agregarJuego(juego2);

        expect(tienda.getCatalogo().length).toBe(2);
    });


    test("Ver detalles de un juego", () => {
        const tienda = new Tienda();
        const juego1 = new Juego("Red Dead Redemption 2", "Accion", 59.99, "Un western epico", "rdr2.jpg");

        tienda.agregarJuego(juego1);

        const detalles = tienda.seleccionarJuego("Red Dead Redemption 2");

        expect(detalles).toContain("Título: Red Dead Redemption 2");
        expect(detalles).toContain("Género: Accion");
        expect(detalles).toContain("Precio: $59.99");


    });

    test("Comprar juego", () => {
        const tienda = new Tienda();
        const usuario = new Usuario("Aylen");
        const juego1 = new Juego("Cyberpunk 2077", "RPG", 44.99, "Futuro distopico", "cp77.jpg");
 
        tienda.agregarJuego(juego1);
        const resultado = tienda.comprarJuego(usuario, juego1);
 
        expect(resultado).toBe("Compra realizada");
    });

});