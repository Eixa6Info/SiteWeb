import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../class/card/card';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @Input()
  public cardMap: Card[];

  constructor() { }

  ngOnInit() {
  }

}
