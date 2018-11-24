import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public body: any = {
    title: 'La bella y la Bestia',
    description: 'Esta es una historia romatica de una linda mujer y un hombre en forma de lobo'
  };

  public title_button: string = 'Siguiente';

  constructor() {}

  ngOnInit() {}

}
