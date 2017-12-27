import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoInmueble } from '../administration/listado-inmueble.component';
import { EdicionInmueble } from '../administration/inmueble.component';

const routes: Routes = [
    {pathMatch: 'full', path: '', redirectTo: '/listado'},
    {pathMatch: 'full', path: 'listado', component: ListadoInmueble},
    {pathMatch: 'full', path: 'inmueble', component: EdicionInmueble},
    {pathMatch: 'full', path: 'inmueble/:id', component: EdicionInmueble },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }