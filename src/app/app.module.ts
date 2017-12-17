import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AgregarInmueble } from './administration/agregar-inmueble.component';
import { EditarInmueble } from './administration/editar-inmueble.component';
import { ListadoInmueble } from './administration/listado-inmueble.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AgregarInmueble,
    EditarInmueble,
    ListadoInmueble
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
