import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
/*import { Region } from './region';*/
import { Producto } from '../clases/customer';
import { DetalleProducto } from '../clases/detalle-producto';
/*import Swal from 'sweetalert2';*/

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private vlurl = 'http://localhost:9393/api/productos';

/*definir las cabeceras */
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private vlHttpClient: HttpClient, private vlRoute: Router) { }

  getProducto(): Observable<any> {
    return this.vlHttpClient.get(this.vlurl).pipe(
      map( (response) => response as Producto[] )
    );
  }

  getDetalleProducto(vlid: number): Observable<any> {
     return this.vlHttpClient.get<DetalleProducto>(`${this.vlurl}/detalleProducto/${vlid}`).pipe(
       catchError( vlerror => {
         /*this.vlRoute.navigate(['/producto']);*/
         console.error(vlerror.error.mensage);
         return throwError(vlerror);
       })
     );
    }
  }
