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


  public card: Card = {
    header: { title: 'Cuentos' },
    body: cuentos[0],
    fooster: { title: 'Escrito por Disney' }

  };


  constructor() {}

  ngOnInit() {}

}
