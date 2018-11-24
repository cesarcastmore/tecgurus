import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Card } from '../../model/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation:  ViewEncapsulation.Emulated

})
export class CardComponent implements OnInit {

  public card: Card = {
    header: { title: 'Cuentos' },
    body: {
      title: 'La bella y la Bestia',
      description: 'Esta es una historia romatica de una linda mujer y un hombre en forma de lobo'
    },
    fooster: { title: 'Escrito por Disney' }

  };


  constructor() {}

  ngOnInit() {}

}
