import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoInmueble } from '../administration/listado-inmueble.component';
import { EdicionInmueble } from '../administration/inmueble.component';

const routes: Routes = [
    {path: '', redirectTo: '/listado', pathMatch: 'full' },
    {path: 'listado', component: ListadoInmueble, pathMatch: 'full' },
    {path: 'inmueble', component: EdicionInmueble, pathMatch: 'full' },
    {path: 'inmueble/:id', component: EdicionInmueble, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }