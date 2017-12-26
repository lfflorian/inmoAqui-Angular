import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../Models/inmueble.model';
import { InmuebleService } from '../Services/inmueble.service';

@Component({
    selector: 'listado-inmueble',
    templateUrl: 'listado-inmueble.component.html'
})

export class ListadoInmueble implements OnInit {
    constructor(private inmuebleService: InmuebleService) {}
    ngOnInit(){
        this.getInmuebles();
    }

    inmuebles: Inmueble[];
    getInmuebles(): void {
        this.inmuebleService.getInmuebles()
        .subscribe(inmo => this.inmuebles = inmo);
    }

    refInmo: Inmueble;
    editar(inmo: Inmueble) {
        this.refInmo = inmo;
        console.log("Editar inmueble con id: " + inmo.id);
    }

    eliminar(inmo: Inmueble) {
        console.log("Eliminar inmueble con id: " + inmo.id);
    }
}