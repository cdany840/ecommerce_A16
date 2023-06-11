import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats = [{
    compras: 77,
    newUsuarios: 4,
    usuarios: 47,
    newCompras: 62
  }]
  
  cantidadCompras: number = 0;
  cantidadUsuarios: number = 0;
  nuevasCompras: number = 0;
  nuevosUsuarios: number = 0;

  tiempo: any;
  
  constructor() {}

  ngOnInit(): void {
    this.tiempo = setInterval(() => {
      if (this.cantidadCompras < this.stats[0].compras) {
        this.cantidadCompras += 1;
      }
  
      if (this.cantidadUsuarios < this.stats[0].usuarios) {
        this.cantidadUsuarios += 1;
      }
  
      if (this.nuevasCompras < this.stats[0].newCompras) {
        this.nuevasCompras += 1;
      }
  
      if (this.nuevosUsuarios < this.stats[0].newUsuarios) {
        this.nuevosUsuarios += 1;
      }
  
      if (
        this.cantidadCompras >= this.stats[0].compras &&
        this.cantidadUsuarios >= this.stats[0].usuarios &&
        this.nuevasCompras >= this.stats[0].newCompras &&
        this.nuevosUsuarios >= this.stats[0].newUsuarios
      ) {
        clearInterval(this.tiempo);
      }
    }, 10);
  }


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  


}
