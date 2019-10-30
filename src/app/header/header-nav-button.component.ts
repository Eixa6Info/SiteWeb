import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErrorModule} from '../module/error/error.module';

@Component({
  selector: 'app-header-nav-button',
  templateUrl: './header-nav-button.component.html',
  styleUrls: ['./header-nav-button.component.scss']
})
export class HeaderNavButtonComponent implements OnInit {

  @Input()
  protected url: string;

  @Input()
  protected name: string;

  public valid: boolean;

  constructor(public router: Router) {
    this.valid = true;
  }

  ngOnInit() {
    if (this.name === null || this.name === undefined) {
      ErrorModule.ShowError('#0001', 'Header Nav Button : Name undefined');
      this.valid = false;
    }

    if (this.url === null || this.url === undefined) {
      ErrorModule.ShowError('#0002', 'Header Nav Button : Url undefined');
      this.valid = false;
    }
  }
}
