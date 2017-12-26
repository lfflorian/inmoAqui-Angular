import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AgregarInmueble } from './administration/agregar-inmueble.component';
import { ListadoInmueble } from './administration/listado-inmueble.component';
import { RoutingModule } from './Routes/routing.modules';
import { ImageUploadModule } from 'angular2-image-upload';

import { InmuebleService } from './Services/inmueble.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AgregarInmueble,
    ListadoInmueble,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    ImageUploadModule.forRoot()
  ],
  providers: [InmuebleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
