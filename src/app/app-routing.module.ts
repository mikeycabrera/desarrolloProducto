import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './vista/productos/productos.component';
import { DetalleProductoComponent } from './vista/detalle-producto/detalle-producto.component';

const routes: Routes = [
{path: '', redirectTo: '/producto', pathMatch: 'full'},
{path: 'producto', component: ProductosComponent},
{path: 'producto/detalleProducto/:id', component: DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
