import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-card',
  templateUrl: './servicios-card.component.html',
  styleUrls: ['./servicios-card.component.css']
})
export class ServiciosCardComponent {
  public image:string="https://www.freepik.es/vector-gratis/plantilla-tarjeta-presentacion_1101981.html"
  public Titulo:string="Servicios"
  constructor(){}

  ngOnInit(): void {}
}
