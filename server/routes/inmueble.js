import express from 'express'
import { inmueble, inmuebles, InmuebleMiddleware } from '../middleware/inmueble';

const app = express.Router()

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
