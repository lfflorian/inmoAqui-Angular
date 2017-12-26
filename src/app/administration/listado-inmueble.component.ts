import { Component } from '@angular/core';
import { Inmueble } from '../Models/inmueble.model';

@Component({
    selector: 'listado-inmueble',
    templateUrl: 'listado-inmueble.component.html'
})

export class ListadoInmueble {
    inmuebles: Inmueble[] = [
        new Inmueble(1,"Casa bonita", "esta casa es muiy bonita", "casa","venta", 2,2,2,190,"Guatemala", "Guatemala", "12", "El jaimico"),
        new Inmueble(2,"Casa bonita", "esta casa es muiy bonita", "casa","venta", 2,2,2,190,"Guatemala", "Guatemala", "12", "El jaimico"),
        new Inmueble(3,"Casa bonita", "esta casa es muiy bonita", "casa","venta", 2,2,2,190,"Guatemala", "Guatemala", "12", "El jaimico"),
        new Inmueble(4,"Casa bonita", "esta casa es muiy bonita", "casa","venta", 2,2,2,190,"Guatemala", "Guatemala", "12", "El jaimico"),
        new Inmueble(5,"Casa bonita", "esta casa es muiy bonita", "casa","venta", 2,2,2,190,"Guatemala", "Guatemala", "12", "El jaimico")
    ];

    refInmo: Inmueble;
    editar(inmo: Inmueble) {
        this.refInmo = inmo;
        console.log("Editar inmueble con id: " + inmo.id);
    }

    eliminar(inmo: Inmueble) {
        console.log("Eliminar inmueble con id: " + inmo.id);
    }
}