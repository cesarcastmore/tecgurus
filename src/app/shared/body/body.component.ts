import { Component, OnInit } from '@angular/core';
import { Body } from '../../model/body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public body: Body = {
    title: 'La bella y la Bestia',
    description: 'Esta es una historia romatica de una linda mujer y un hombre en forma de lobo'
  };

  public title_button: string = 'Siguiente';

  constructor() {}

  ngOnInit() {}

}
