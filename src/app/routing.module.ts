import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoInmueble } from './administration/listado-inmueble.component';
import { AgregarInmueble } from './administration/agregar-inmueble.component';

const routes: Routes = [
    {path: 'listado', component: ListadoInmueble},
    {path: 'agregar', component: AgregarInmueble}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }