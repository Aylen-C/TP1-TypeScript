import { Producto } from "./Producto";
import { Comprar } from "./Comprar";

export class Juego extends Producto implements Comprar {

    private genero: string;

    constructor(titulo: string, genero: string, precio: number){
        super(titulo, precio);
        this.genero = genero;
    }

    public getGenero(): string {
        return this.genero;
    }

    public comprar(): string{
        return "Juego Comprado";
    }

    public mostrarDatos(): string {
        return this.getTitulo() + " - " + this.genero + " - " + this.getPrecio();
    }
}