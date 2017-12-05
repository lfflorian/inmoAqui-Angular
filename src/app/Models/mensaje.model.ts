export class Mensaje {
    id: number;
    idCliente: number;
    idPropiedad?: number;
    mensaje: string;

    constructor(id: number, idCliente: number, mensaje: string, idPropiedad?: number)
    {
        this.id = id,
        this.idCliente = idCliente,
        this.mensaje = mensaje,
        this.idPropiedad = idPropiedad
    }
}