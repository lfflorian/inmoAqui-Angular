import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from '../Models/inmueble.model';
import { Imagenes } from '../Models/imagenes.model';


@Component({
    selector: 'agregar-inmueble',
    templateUrl: 'inmueble.component.html',
    styleUrls: ['./inmueble.component.css']
})

export class AgregarInmueble implements OnInit {
    refInmo: Inmueble[] = [];

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id != 0)
        {
            console.log(id);
        }
    }

    constructor(private route: ActivatedRoute) {

    }

    onChange(event) {
        var files = event.srcElement.files;
        for (let file of files)
        {
            console.log(file.name)
        }
        console.log(files);
    }

    CreateForm = new FormGroup({
        titulo: new FormControl(''),
        descripcion: new FormControl(''),
        tipoinmueble: new FormControl(''),
        opcion: new FormControl(''),
        nohabitaciones: new FormControl(''),
        nobaños: new FormControl(''),
        parqueos: new FormControl(''),
        dimenciones: new FormControl(''),
        departamento: new FormControl(''),
        municipio: new FormControl(''),
        zona: new FormControl(''),
        colonia: new FormControl('')
    });
    
    TipoInmuebles: string[] = [
        "Casa",
        "Apartamento",
        "Oficina",
        "Terreno",
        "Edificio",
        "Finca"
    ];

    Opciones: string[] = [
        "Venta",
        "Renta"
    ]

    onSubmit(CreateForm: FormGroup) {
        /*inmo: Inmueble = {
            id: 1,
            titulo: CreateForm.value.titulo,
            descripcion: CreateForm.value.descripcion,
            tipoinmueble:  CreateForm.value.tipoinmueble,
            opcion:  CreateForm.value.opcion,
            nohabitaciones: CreateForm.value.nohabitaciones,
            nobaños: CreateForm.value.nobaños,
            parqueos: CreateForm.value.parqueos,
            dimenciones: CreateForm.value.dimenciones,
            departamento: CreateForm.value.departamento,
            municipio: CreateForm.value.municipio,
            zona: CreateForm.value.zona,
            colonia: CreateForm.value.colonia 
        };*/

        console.log(CreateForm);
    }
}

