import { Imagenes } from './imagenes.model'

export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    mensajes: Imagenes[];

    constructor(id: number, nombre: string, apellido: string, correo: string, telefono: string)
    {
        this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo,
        this.telefono = telefono,
        this.mensajes = []
    }
}