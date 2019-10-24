import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Rutas*/
import { AppRoutingModule } from './app-routing.module';

/*Modulos*/

/* Servicios*/

/*Agregar clase de formulario*/
import {FormsModule} from '@angular/forms';

/*Agregar los imports de material*/
import { MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatPaginatorIntl } from '@angular/material';
/*libreria http*/
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductosComponent } from './vista/productos/productos.component';
import { DetalleProductoComponent } from './vista/detalle-producto/detalle-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarrasComponent } from './graficas/barras/barras.component';

/*Libreria para graficas*/
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleProductoComponent,
    BarrasComponent
   ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
