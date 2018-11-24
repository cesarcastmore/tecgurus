import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Body } from '../../model/body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   @Input() body: Body;

  @Input() title_button: string;

  @Output()  cambiarCuento: EventEmitter<boolean>= new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  public onClick(){

    this.cambiarCuento.emit(true);
  }

}
