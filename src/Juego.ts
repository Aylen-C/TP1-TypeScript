import { Producto } from "./Producto";
import { Comprar } from "./IComprar";

// juego hereda de producto e implementa comprar
export class Juego extends Producto implements Comprar {

    // atributo propio de juego y su descripcion con la foto
    private genero: string;
    private description: string;
    private imagen: string;

    constructor(titulo: string, genero: string, precio: number, description: string, imagen: string){
        super(titulo, precio); //llama al constructor de Producto
        this.genero = genero;
        this.description = description;
        this.imagen = imagen;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getDescription(): string {
        return this.description;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public comprar(): string{
        return "Juego Comprado";
    }

    // muestra los datos del juego
    public mostrarDatos(): string {
        return this.getTitulo() + " - " + this.genero + " - " + this.getPrecio();
    }

    public verDetalles(): string {
        return "Título: " + this.getTitulo() + "\n" +
               "Género: " + this.genero + "\n" +
               "Precio: $" + this.getPrecio() + "\n" +
               "Descripción: " + this.description + "\n" +
               "Imagen: " + this.imagen;
    }    

}