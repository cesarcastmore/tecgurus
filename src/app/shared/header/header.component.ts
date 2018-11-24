import { Component, OnInit } from '@angular/core';
import { Header } from '../../model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public header: Header = {title: 'Cuentos'};


  constructor() {}

  ngOnInit() {}

}
