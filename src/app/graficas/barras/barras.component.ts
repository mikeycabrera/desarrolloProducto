import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceService } from '../../servicios/service.service';
import { Producto } from '../../clases/producto';
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  vlProducto: Producto;
  data: Producto[];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor( private vlservicio: ServiceService) { }

  ngOnInit() {
    /*this. getGraficaProducto();*/
  }
  getProducto() {
    this.vlservicio.getProducto().subscribe(
      (vlProducto) => {
      this.vlProducto = vlProducto;
     }
    );
  }
  getGraficaProducto() {
    this.vlservicio.getProducto().subscribe(
      (vlProducto) => {
      this.vlProducto = vlProducto;
      /*this.barChartData = [
        { data: [this.vlProducto.pk, this.vlProducto.price, this.vlProducto.stock], label: 'Series A' }
       /* { data: [this.vlProducto.name , 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ];*/
     }
    );
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
