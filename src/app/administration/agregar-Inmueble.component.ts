import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'agregar-inmueble',
    templateUrl: 'inmueble.component.html',
    styleUrls: ['./inmueble.component.css']
})

export class AgregarInmueble {
    TipoInmuebles: string[] = [
        "Casa",
        "Apartamento",
        "Oficina",
        "Terreno",
        "Edificio",
        "Finca"
    ];

}