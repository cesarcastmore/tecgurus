import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../../model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('header') header: Header;


  constructor() {}

  ngOnInit() {}

}
