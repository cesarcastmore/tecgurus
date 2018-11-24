import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooster',
  templateUrl: './fooster.component.html',
  styleUrls: ['./fooster.component.css']
})
export class FoosterComponent implements OnInit {

  public title: string = 'Escrito por Disney'

  constructor() {}

  ngOnInit() {}

}
