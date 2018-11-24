import { Component, OnInit } from '@angular/core';
import { Fooster } from '../../model/fooster';

@Component({
  selector: 'app-fooster',
  templateUrl: './fooster.component.html',
  styleUrls: ['./fooster.component.css']
})
export class FoosterComponent implements OnInit {

  public fooster: Fooster= { title:'Escrito por Disney'}

  constructor() {}

  ngOnInit() {}

}
