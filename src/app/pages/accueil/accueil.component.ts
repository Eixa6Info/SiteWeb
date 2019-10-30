import {Component, OnInit} from '@angular/core';
import {Card} from '../../class/card/card';
import {Data} from '../../class/data/data';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  depanages: Card[] = [];
  creations: Card[] = [];
  formations: Card[] = [];
  reseaux: Card[] = [];
  ou: Card[] = [];
  contact: Card[] = [];
  actualites: Card[] = [];
  video: Card[] = [];
  anydesk: Card[] = [];
  devis: Card[] = [];
  social: Card[] = [];


  constructor() {

    const data = new Data();
    this.depanages = data.depanages;
    this.creations = data.creations;
    this.formations = data.formations;
    this.reseaux = data.reseaux;
    this.ou = data.ou;
    this.contact = data.contact;
    this.actualites = data.actualites;
    this.video = data.video;
    this.anydesk = data.anydesk;
    this.devis = data.devis;
    this.social = data.social;

  }

  ngOnInit() {
  }


}
