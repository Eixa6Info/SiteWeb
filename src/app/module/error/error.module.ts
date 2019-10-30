import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ErrorModule {

  static ShowError(code: string, message: string) {
    console.error("Error : " + code);
    console.error(message);
  }

}
