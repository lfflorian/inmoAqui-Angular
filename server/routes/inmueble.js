import express from 'express'

//middleWare

function InmuebleMiddleware(req, res, next) {
    const { id } = req.params
    req.inmueble = inmuebles.find(({ id }) => id === +id )
    next()
}

const app = express.Router()
const inmueble = {
    id: 1,
    titulo: "Casa en colonia lourdes",
    descripcion: "Casa linda en colonia lourdes zona 16",
    tipoInmueble: "casa",
    opcion: "venta",
    habitaciones: 2,
    baños: 2,
    parqueos: 2,
    dimenciones: 100,
    departamento: "Guatemala",
    municipio: "Guatemala",
    zona: "16",
    colonia: "Lourdes",
    imagenes: []
}

const inmuebles = new Array(10).fill(inmueble)

app.get('/', (req, res) => res.status(200).json(inmuebles))

app.get('/:id', InmuebleMiddleware, (req, res) => {
    res.status(200).json(req.inmueble)
})

app.post('/', (req, res) => {
    const inmueble = req.body
    inmueble.id = +new Date()
    inmuebles.push(inmueble)
    res.status(201).json(inmueble)
})

export default app
