import { Component, OnInit, Input } from '@angular/core';
import { Fooster } from '../../model/fooster';

@Component({
  selector: 'app-fooster',
  templateUrl: './fooster.component.html',
  styleUrls: ['./fooster.component.css'],
})
export class FoosterComponent implements OnInit {

  @Input() fooster: Fooster;

  constructor() {}

  ngOnInit() {}

}
