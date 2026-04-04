export abstract class Producto{
    
    private titulo: string;
    private precio: number;

    constructor(titulo: string, precio: number){
        this.titulo = titulo;
        this.precio = precio;
    }

    public getTitulo(): string{
        return this.titulo;
    }

    public getPrecio(): number{
        return this.precio;
    }

    public abstract mostrarDatos(): string;

}