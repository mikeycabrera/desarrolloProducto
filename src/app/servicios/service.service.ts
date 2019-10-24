import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Producto } from '../clases/producto';
import { DetalleProducto } from '../clases/detalle-producto';
/*import Swal from 'sweetalert2';*/

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private vlurl = 'https://api.software.madkting.com/shops/76/products/';
vlProducto: Producto;
vlid: number;
/*definir las cabeceras */
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2',
  })
};
httpHeaders  = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2'
});

  constructor( private vlHttpClient: HttpClient, private vlRoute: Router ) { }

  getProducto(): Observable<any> {
     return this.vlHttpClient.get(this.vlurl, {headers: this.httpHeaders}).pipe(
      map( (response) => response as Producto[] )
    );
  }

  getDetalleproducto(vlid): Observable<Producto> {
    return this.vlHttpClient.post<Producto>(this.vlurl + vlid, this.httpOptions);
    }
  }
