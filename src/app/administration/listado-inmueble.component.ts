import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../Models/inmueble.model';
import { InmuebleService } from '../Services/inmueble.service';
import { NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { inmuebles } from '../Services/inmueblesList.component';

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

    collection: number = inmuebles.length;
    currentPage: number = 1;
    get pageInmuebles(){
        return this.inmuebles.slice((this.currentPage-1)*10, this.currentPage*10);
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