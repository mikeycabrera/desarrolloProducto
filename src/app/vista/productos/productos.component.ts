import { Component, OnInit } from '@angular/core';
import { Producto } from '../../clases/customer';
import { ServiceService } from '../../servicios/service.service';
import { VentanaModal } from '../../clases/ventana-modal';
import { DetalleProducto } from '../../clases/detalle-producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  vlProducto: Producto;
  vldetalleProducto: DetalleProducto;
  vlProductoSeleccionado: DetalleProducto;
  vlid: number;
  constructor( private vlservicio: ServiceService, private vlVentanaModal: VentanaModal, private vlrouter: ActivatedRoute) { }

  ngOnInit() {
     this.vlservicio.getProducto().subscribe(
       (vlProducto) => {
       this.vlProducto = vlProducto;
      }
     );

     this.getDetalleProducto();
  }
 getDetalleProducto(): void {
   this.vlrouter.params.subscribe(params => {
     this.vlid = params.id;
     if (this.vlid) {
       this.vlservicio.getDetalleProducto(this.vlid).subscribe((vldetalleProducto) => this.vldetalleProducto = vldetalleProducto);
       console.log(this.vlservicio.getDetalleProducto(this.vlid));
     }
   });
}
  detalleModal( vldetalleProducto) {
    this.vlProductoSeleccionado = vldetalleProducto;
    this.vlVentanaModal.abrirModal();
  }

}
