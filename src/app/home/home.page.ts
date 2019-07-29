import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  date: string;
  horaCompletaDesde: any;
  horaCompletaHasta: any;
  hora: any;
  minutos: any;
  nuevaFechaDesde: any;
  nuevaFechaHasta: any;
  type: 'time'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  constructor() { }

  ngOnInit(){
  }

  onChangeDate($event) {
    this.nuevaFechaDesde = this.construirObjetoFecha($event);
    this.nuevaFechaHasta = this.construirObjetoFecha($event);
  }

  onBlurHora(event, fecha){
    if(fecha == 0){
      this.construirObjetoHoraMinuto(event, this.nuevaFechaDesde);
    } else if(fecha == 1){
      this.construirObjetoHoraMinuto(event, this.nuevaFechaHasta);
    }
    console.log(this.nuevaFechaDesde);
    console.log(this.nuevaFechaHasta);
  }

  construirObjetoFecha(event){
    return new Date(event._d.getTime());
  }

  construirObjetoHoraMinuto(horaCompleta, nuevaFecha){
    this.hora = horaCompleta.split(':')[0];
    this.minutos = horaCompleta.split(':')[1];
    nuevaFecha.setHours(this.hora);
    nuevaFecha.setMinutes(this.minutos);
  }
}
