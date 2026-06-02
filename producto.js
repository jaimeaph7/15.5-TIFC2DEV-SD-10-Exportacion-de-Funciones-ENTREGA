class Producto {

    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.disponible = true;
    }

    calcularTotal() {
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje) {
        const descuento = this.precio * (porcentaje / 100);
        return 'el precio con descuento del producto ' + this.nombre + ' es ' + (this.precio - descuento);
    }

    resumen() {
        return `El nombre del producto es ${this.nombre}, su precio base es ${this.precio}, su categoría es ${this.categoria} y el producto está ${this.disponible}`;
    }

    tarjeta() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio con IVA: ${this.calcularTotal()}`;
    }

}


// checkpoint
const laptop = new Producto("Laptop", 3000000, "Tecnología");
const silla = new Producto("Silla", 500000, "Hogar");

console.log(laptop.tarjeta());
console.log(silla.tarjeta());

console.log(laptop.aplicarDescuento(10));

console.log(laptop.precio); 



// clase extendida

class ProductoDigital extends Producto {

    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio;
    }

    tarjeta() {
        return `Producto: ${this.nombre} | Categoría: Digital | Licencia: ${this.licencia} | Precio: ${this.calcularTotal()}`;
    }


}


const mouse = new Producto("Mouse", 100000, "Tecnología");

const curso = new ProductoDigital(
    "Curso de Blender",
    150000,
    "de por vida"
);

console.log(mouse.calcularTotal());
console.log(curso.calcularTotal());

console.log(mouse.tarjeta());
console.log(curso.tarjeta());


export { Producto, ProductoDigital };
///
