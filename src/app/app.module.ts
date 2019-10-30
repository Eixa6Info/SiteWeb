import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderNavButtonComponent} from './header/header-nav-button.component';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CardsComponent} from './components/cards/cards.component';
import { VideoComponent } from './components/video/video.component';
import { ButtonComponent } from './components/button/button.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import {FormsModule} from '@angular/forms';
import { SocialComponent } from './components/social/social.component';
import { MapsComponent } from './components/maps/maps.component';
import { ConditionGeneraleComponent } from './pages/condition-generale/condition-generale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavButtonComponent,
    AccueilComponent,
    CardsComponent,
    VideoComponent,
    ButtonComponent,
    FormulaireComponent,
    SocialComponent,
    MapsComponent,
    ConditionGeneraleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
