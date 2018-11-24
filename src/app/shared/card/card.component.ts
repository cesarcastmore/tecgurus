import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Card, Body } from '../../model';
import { cuentos } from '../../data/cuentos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class CardComponent implements OnInit {

  public cuentos: Body[] = cuentos;

  private cont: number = 0;


  public card: Card = {
    header: { title: 'Cuentos' },
    body: cuentos[this.cont],
    fooster: { title: 'Escrito por Disney' }

  };


  constructor() {

  }

  ngOnInit() {

  }


  public siguienteCuento(onClick: boolean) {
    this.cont += 1;

    if (onClick)
      if (this.cont == cuentos.length) 
        this.cont = 0;
      

    this.card.body = this.cuentos[this.cont];


  }

}
