class Usuario {
    constructor(nombre, email, rol) {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }

    saludo() {
        return `Hola, soy ${this.nombre} y mi rol es ${this.rol}.`;
    }

    desactivar() {
        this.activo = false;
        return "Usuario desactivado";
    }

    resumen() {
        return `El nombre es ${this.nombre}, su email es ${this.email}, su rol es ${this.rol} y el usuario está ${this.activo}`;
    }
}

// Instancias de Usuario base
const usuario1 = new Usuario("Juan", "juanadmin@gmail.com", "administrador");
const usuario2 = new Usuario("Maria", "mariaconsultora@gmail.com", "consultora");

console.log(usuario1.saludo(), usuario1.resumen());
console.log(usuario2.saludo(), usuario2.resumen());


// Clase extendida

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        
        super(nombre, email, "Cliente VIP"); 
        this.membresia = membresia;
    }

    saludo() {
        return `${super.saludo()} y tengo una membresía ${this.membresia}.`;
    }

    beneficios() {
        return `Los beneficios de la membresía ${this.membresia} incluyen acceso a Arribeños 1630 y a el presidente de la nacion.`;
    }

}

const usuarioVIP1 = new UsuarioVIP("Eliseo", "EliseoBazurto@gmail.com", "Diamond");
console.log(usuarioVIP1.saludo(), usuarioVIP1.resumen()); 
console.log(usuarioVIP1.beneficios());

export { Usuario, UsuarioVIP };