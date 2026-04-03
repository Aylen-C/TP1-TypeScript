class Persona {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    saludar(): string{
        return "Hola " + this.nombre;
    }
}

const p = new Persona("Aylen")
console.log(p.saludar())