import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../class/card/card';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input()
  public cardsocial: Card[];
  constructor() { }

  ngOnInit() {
  }

}
