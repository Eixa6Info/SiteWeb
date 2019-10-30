import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../class/card/card';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input()
  public cardVideo: Card[];
  public iframeId = 'iframeId';

  constructor() { }

  ngOnInit() {
  }

  sound() {
    let video;
    video = document.getElementById(this.iframeId);
    video.muted = true;

  }

}
