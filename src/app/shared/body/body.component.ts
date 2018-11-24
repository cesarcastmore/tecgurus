import { Component, OnInit, Input } from '@angular/core';
import { Body } from '../../model/body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   @Input() body: Body;

  public title_button: string = 'Siguiente';

  constructor() {}

  ngOnInit() {}

}
