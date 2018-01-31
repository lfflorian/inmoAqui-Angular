import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from '../Models/inmueble.model';
import { Imagenes } from '../Models/imagenes.model';
import { InmuebleService } from '../Services/inmueble.service';

@Component({
    selector: 'agregar-inmueble',
    templateUrl: 'inmueble.component.html',
    styleUrls: ['./inmueble.component.css']
})

export class EdicionInmueble implements OnInit {
    refInmo: Inmueble[] = [];
    inmueble: Inmueble; /* CAMBIAR A SOLO UNO */
    sub: any;
    getInmueble(id: number): void {
        /* GET INMUEBLE */
        this.sub = this.route.params.subscribe(param => {
            this.inmuebleService
            .getInmueble(id)
            .then((Inmueble: Inmueble) => {
                this.inmueble = Inmueble;
                console.log(this.inmueble);
            });
        });
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id != 0)
        {
            this.getInmueble(id);
        }
    }

    constructor(private route: ActivatedRoute, private inmuebleService: InmuebleService) {

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
        banos: new FormControl(''),
        parqueos: new FormControl(''),
        dimenciones: new FormControl(''),
        departamento: new FormControl(''),
        municipio: new FormControl(''),
        zona: new FormControl(''),
        colonia: new FormControl(''),
        imagenes: new FormControl('')
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
            banos: CreateForm.value.nobanos,
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

