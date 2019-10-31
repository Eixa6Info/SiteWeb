import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../class/card/card';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input()
  public cardLogo: Card[];

  constructor() { }

  ngOnInit() {
  }

}
