export class Usuarios {
    idUsuario: number;
    contraseña: string;
    nombre: string;
    apellido: string;

    constructor(idUsuario: number, contraseña: string, nombre: string, apellido: string)
    {
        this.idUsuario = idUsuario,
        this.contraseña = contraseña,
        this.nombre = nombre,
        this.apellido = apellido
    }
}