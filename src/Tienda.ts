import {Juego} from "./Juego";
import {Usuario} from "./Juego";

export class Tienda {
    private catalogo: Juego[];

    constructor() {
        this.catologo = [];
    }

    public agregarJuego(juego: Juego): void {
        this.catalogo.push(juego);
    }

    public buscarJuego(nombre: string): Juego[] {
        let encontrados: Juego[] = [];
        let i: number = 0;

        while (i < this.catalogo.length) {

            if (this.catalogo[i].getTitulo() === nombre) {
                encontrados.push(this.catalogo[i]);
            }

            i = i + 1;
        }
    }

}