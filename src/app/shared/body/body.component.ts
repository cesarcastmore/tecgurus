import { Component, OnInit, Input } from '@angular/core';
import { Body } from '../../model/body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   @Input() body: Body;

  @Input() title_button: string;

  constructor() {}

  ngOnInit() {}

  public onClick(){
  	alert("Se hizo click");
  }

}
