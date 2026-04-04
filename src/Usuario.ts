import { Juego } from "./Juego";

export class Usuario {

    private nombre: string;
    private juegosComprados: Juego[];

    constructor(nombre: string){
        this.nombre = nombre;
        this.juegosComprados = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public agregarJuego(juego: Juego): void{
        this.juegosComprados.push(juego);        
    } //agrega juego a la listo

    public verJuegosComprados(): Juego[] {
        return this.juegosComprados;
    }

}