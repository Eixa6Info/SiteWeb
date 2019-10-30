import {Card} from '../card/card';
// @ts-ignore
import info from '../../../assets/info.json';
import {analyzeAndValidateNgModules} from '@angular/compiler';

export class Data {

  public contact: Card[] = [];
  public creations: Card[] = [];
  public depanages: Card[] = [];
  public formations: Card[] = [];
  public ou: Card[] = [];
  public reseaux: Card[] = [];
  public actualites: Card[] = [];
  public video: Card[] = [];
  public anydesk: Card[] = [];
  public devis: Card[] = [];
  public social: Card[] = [];
  private data = info;

  constructor() {
    this.data.contact.forEach((value) => {
      this.contact.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.creations.forEach((value) => {
      this.creations.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.depanages.forEach((value) => {
      this.depanages.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.formations.forEach((value) => {
      this.formations.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.ou.forEach((value) => {
      this.ou.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.reseaux.forEach((value) => {
      this.reseaux.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.actualites.forEach((value) => {
      this.actualites.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.video.forEach((value) => {
      this.video.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.anydesk.forEach((value) => {
      this.anydesk.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.devis.forEach((value) => {
      this.devis.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });

    this.data.social.forEach((value) => {
      this.social.push(
        new Card(value.name, value.text, value.url, value.lien)
      );
    });
  }

}
