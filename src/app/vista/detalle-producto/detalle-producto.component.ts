import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../servicios/service.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
vlid: number;
titulo: 'Detalle Producto';
vlDetProducto: Producto;
  constructor( private vlServicio: ServiceService, private vlActivRoute: ActivatedRoute) { }

  ngOnInit() {
     this.DetalleProducto();
  }

   DetalleProducto() {
    this.vlActivRoute.paramMap.subscribe(vlparam => {
      this.vlid = +vlparam.get('id');
      this.vlServicio.getDetalleproducto(this.vlid).subscribe(vlDetProducto => this.vlDetProducto = vlDetProducto);
      });
  }
}
