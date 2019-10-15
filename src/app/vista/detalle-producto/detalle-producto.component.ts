import { Component, OnInit, Input } from '@angular/core';
import { DetalleProducto } from '../../clases/detalle-producto';
import { ServiceService } from '../../servicios/service.service';
import { ActivatedRoute } from '@angular/router';
import { VentanaModal } from '../../clases/ventana-modal';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
@Input() vlDetalleProducto: DetalleProducto;
vlid: number;
vlDetalleSeleccionado: DetalleProducto;
vlDetProducto: DetalleProducto;
  constructor( private vlServicio: ServiceService, private vlrouter: ActivatedRoute, public vlVentanaModal: VentanaModal) { }

  ngOnInit() {
     this.DetalleProducto();
  }

   DetalleProducto(): void {
    this.vlrouter.params.subscribe(params => {
      this.vlid = params.id;
      if (this.vlid) {
        this.vlServicio.getDetalleProducto(this.vlid).subscribe((vldetalleProducto) => this.vlDetalleProducto = vldetalleProducto);
        console.log(this.vlServicio.getDetalleProducto(this.vlid));
      }
    });
 }
  cerrarModal( vdetalleProducto: DetalleProducto) {
    this.vlDetalleSeleccionado = vdetalleProducto;
    this.vlVentanaModal.cerrarModal();
  }

}
