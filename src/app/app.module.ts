import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Rutas*/
import { AppRoutingModule } from './app-routing.module';

/*Modulos*/

/* Servicios*/

/*Agregar clase de formulario*/
import {FormsModule} from '@angular/forms';

/*libreria http*/
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductosComponent } from './vista/productos/productos.component';
import { DetalleProductoComponent } from './vista/detalle-producto/detalle-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleProductoComponent
   ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
