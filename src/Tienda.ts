import {Juego} from "./Juego";
import {Usuario} from "./Usuario";

export class Tienda {

    // juegos disponibles para comprar
    private catalogo: Juego[];

    constructor() { // catalogo vacio
        this.catalogo = [];
    }

    // agrega un juego al catalogo
    public agregarJuego(juego: Juego): void {
        this.catalogo.push(juego);
    }

    // juegos disponibles para comprar
    public getCatalogo(): Juego[] {
        return this.catalogo;
    }

    // busca los juegos por nombre 
    public buscarJuego(nombre: string): Juego[] {
        let encontrados: Juego[] = [];
        let i: number = 0;

        while (i < this.catalogo.length) { // recorre el catalogo

            // compara el titulo del juego con el nombre buscado
            // si coincide lo agrega a la lista de encontrados
            if (this.catalogo[i].getTitulo() === nombre) {
                encontrados.push(this.catalogo[i]);
            }
            i = i + 1;
        }
        return encontrados;
    }

    // busca el juego por nombre y muestra sus detalles
    public seleccionarJuego(nombre: string): string {
        let encontrados: Juego[] = this.buscarJuego(nombre);
        
        if (encontrados.length == 0) {
            return "Juego no encontrado";
        }
        return encontrados[0].verDetalles();
    }

    // hace la compra y agrega el juego a la biblioteca
    public comprarJuego(usuario: Usuario, juego: Juego): string {
        usuario.agregarJuego(juego);

        return "Compra realizada";
    }
}