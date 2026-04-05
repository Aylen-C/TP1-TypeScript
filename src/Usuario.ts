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

    public agregarJuego(juego: Juego): void;
    public agregarJuego(juego: Juego[]): void;

    public agregarJuego(juego: Juego | Juego[]): void {
        if (juego instanceof Juego) {
            this.juegosComprados.push(juego);
        }
        else {
            let i = 0;

            while (i < juego.length) {
                this.juegosComprados.push(juego[i]);
                i = i + 1;
            }
        }
    }

    public verJuegosComprados(): Juego[] {
        return this.juegosComprados;
    }

}