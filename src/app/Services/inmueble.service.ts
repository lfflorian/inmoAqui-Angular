import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Inmueble } from '../Models/inmueble.model';
import { inmuebles } from './inmueblesList.component';

@Injectable()
export class InmuebleService {
  constructor() { }

  private inmoUrl = 'api/inmuebles'; 

  getInmuebles(): Observable<Inmueble[]> {
    return of(inmuebles);
  }
}
