import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Inmueble } from '../Models/inmueble.model';
import { inmuebles } from './inmueblesList.component';
import { environment } from '../../environments/environment';
import { error } from 'util';

@Injectable()
export class InmuebleService {
  private serverUrl: string;
  constructor(private http: Http) {
    this.serverUrl = urljoin(environment.apiUrl, 'inmuebles');
  }

  getInmuebles(): Promise<void | Inmueble[]> {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(response => response.json() as Inmueble[])
      .catch(this.handleError);
  }

  getInmueble(id): Promise<void | Inmueble> {
    const url = urljoin(this.serverUrl, id);
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Inmueble)
    .catch(this.handleError);
  } 

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.message}` : 'Server error';
    console.log(errMsg);
  }
}
