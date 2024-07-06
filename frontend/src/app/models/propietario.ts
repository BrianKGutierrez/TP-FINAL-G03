export class Propietario {
    _id!: string;
    apellido: string;
    nombre: string;
    dni: string;
    email: string;
    telefono: number;


    constructor(_id: string, apellido: string = "", nombre: string = "", dni: string = "", email: string = "", telefono: number = 0) {
        this._id = _id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
    }
}
