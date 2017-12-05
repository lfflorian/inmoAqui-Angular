import { Imagenes } from './imagenes.model'

export class Inmueble {
    id: number;
    titulo: string;
    descripcion: string;
    tipoInmueble: string;
    opcion: string;
    habitaciones: number;
    baños: number;
    parqueos: number;
    dimenciones: number;
    departamento: string;
    municipio: string;
    zona: string;
    colonia: string;
    imagenes: Imagenes[];

    constructor(id: number,titulo: string, descripcion: string, tipoInmueble: string,
        opcion: string, habitaciones: number, baños: number, parqueos: number, dimenciones: number,
        departamento: string, municipio: string, zona: string,colonia: string) {
            this.id = id,
            this.titulo = titulo,
            this.descripcion = descripcion,
            this.tipoInmueble = tipoInmueble,
            this.opcion = opcion,
            this.habitaciones = habitaciones,
            this.baños = baños,
            this.parqueos = parqueos,
            this.dimenciones = dimenciones,
            this.departamento = departamento,
            this.municipio = municipio,
            this.zona = zona,
            this.colonia = colonia,
            this.imagenes = []
        }
}