export class Card {
  public url;
  public name;
  public text;
  public lien;

  constructor(name: string, text: string, url: string, lien: string) {
    this.name = name;
    this.url = url;
    this.text = text;
    this.lien = lien;
  }
}
