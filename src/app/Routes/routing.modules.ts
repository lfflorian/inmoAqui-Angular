import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoInmueble } from '../administration/listado-inmueble.component';
import { AgregarInmueble } from '../administration/agregar-inmueble.component';

const routes: Routes = [
    {pathMatch: 'full', path: '', redirectTo: '/listado'},
    {pathMatch: 'full', path: 'listado', component: ListadoInmueble},
    {pathMatch: 'full', path: 'agregar', component: AgregarInmueble},
    {pathMatch: 'full', path: 'agregar/:id', component: AgregarInmueble },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }