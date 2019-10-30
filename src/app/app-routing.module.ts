import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {ConditionGeneraleComponent} from './pages/condition-generale/condition-generale.component';

const routes: Routes = [
  {path: 'condition-générale', component: ConditionGeneraleComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
