import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../../clases/producto';
import { ServiceService } from '../../servicios/service.service';
import { VentanaModal } from '../../clases/ventana-modal';
import { DetalleProducto } from '../../clases/detalle-producto';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

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
  displayedColumns = ['Pk', 'Name', 'Price', 'Sku', 'Stock', 'Acciones'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private vlservicio: ServiceService, private vlVentanaModal: VentanaModal, private vlrouter: ActivatedRoute) { }

  ngOnInit() {
     this.renderDataTable();
     console.log(this.getProducto());
  }
  getProducto() {
    this.vlservicio.getProducto().subscribe(
      (vlProducto) => {
      this.vlProducto = vlProducto;
     }
    );
  }
  renderDataTable() {
    this.vlservicio.getProducto().subscribe(
      x => {this.dataSource = new MatTableDataSource(),
      this.dataSource.data = x;
            console.log('Observer tiene una respuesta del web Api', this.dataSource.data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
           },
      error => {
        console.log('Error al obtener los  usuarios' + error);
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  detalleModal( vldetalleProducto) {
    this.vlProductoSeleccionado = vldetalleProducto;
    this.vlVentanaModal.abrirModal();
  }

}
