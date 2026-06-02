import { Usuario, UsuarioVIP } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";


const usuario1 = new Usuario(
    "Juan",
    "juanadmin@gmail.com",
    "Cliente"
);

const usuario2 = new Usuario(
    "Maria",
    "mariaconsultora@gmail.com",
    "Administrador"
);

const usuarioVIP1 = new UsuarioVIP(
    "Eliseo",
    "eliseobazurto@gmail.com",
    "Diamond"
);


const laptop = new Producto(
    "Laptop",
    3000000,
    "Tecnología"
);

const silla = new Producto(
    "Silla",
    500000,
    "Hogar"
);

const cursoBlender = new ProductoDigital(
    "Curso de Blender",
    150000,
    "de por vida"
);

const softwareCAD = new ProductoDigital(
    "Software CAD",
    300000,
    "anual"
);


usuario1.desactivar();

console.log(laptop.aplicarDescuento(20));

console.log(laptop.tarjeta());
console.log(silla.tarjeta());
console.log(cursoBlender.tarjeta());
console.log(softwareCAD.tarjeta());

console.log(usuario1.resumen());
console.log(usuario2.resumen());
console.log(usuarioVIP1.resumen());