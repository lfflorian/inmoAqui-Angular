export const inmueble = {
    id: 1,
    titulo: "Casa bonita",
    descripcion: "esta casa es muiy bonita",
    tipoInmueble: "casa",
    opcion: "renta",
    habitaciones: 2,
    banos: 2,
    parqueos: 2,
    dimenciones: 100,
    departamento: "Guatemala",
    municipio: "Guatemala",
    zona: "16",
    colonia: "Montesano",
    imagenes: []
}

export const inmuebles = new Array(10).fill(inmueble)

export const InmuebleMiddleware = (req, res, next) => {
    const { id } = req.params
    req.inmueble = inmuebles.find(({ id }) => id === +id )
    next()
}