import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './vista/productos/productos.component';
import { DetalleProductoComponent } from './vista/detalle-producto/detalle-producto.component';
import { BarrasComponent } from './graficas/barras/barras.component';

const routes: Routes = [
{path: '', redirectTo: 'producto', pathMatch: 'full'},
{path: 'producto', component: ProductosComponent},
{path: 'detalleProducto/:id', component: DetalleProductoComponent},
{path: 'gracfiaBarras', component: BarrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
