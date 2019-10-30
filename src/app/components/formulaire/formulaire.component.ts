import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../class/card/card';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  @Input()
  public cardFormulaire: Card[];
  public id = Math.random() + '_' + Math.random();
  public modalId = 'bg-modal_' + this.id;
  public closeId = 'close_' + this.id;
  public formId = 'form_' + this.id;

  constructor() {
  }

  ngOnInit() {
  }

  showModal() {
    document.getElementById(this.modalId).style.display = 'flex';
    document.getElementById(this.closeId).style.display = 'flex';
  }
  downModal() {
    document.getElementById(this.modalId).style.display = 'none';
    document.getElementById(this.closeId).style.display = 'none';
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
