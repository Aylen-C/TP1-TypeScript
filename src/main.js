"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return "Hola " + this.nombre;
    }
}
const p = new Persona("Aylen");
console.log(p.saludar());
//# sourceMappingURL=main.js.map