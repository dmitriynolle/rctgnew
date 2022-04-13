import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Judge1Component} from './judge/judge1/judge1.component';
import {Judge2Component} from './judge/judge2/judge2.component';
import {RegistrationComponent} from './organizer/registration/registration.component';
import {EtapmenuComponent} from './etapmenu/etapmenu.component';
import {OrganizermenuComponent} from './organizer/organizermenu/organizermenu.component';
import {ResultComponent} from './rating/result/result.component';
import {FinesComponent} from './organizer/fines/fines.component';
import {RegComponent} from './password/reg/reg.component';
import {RatingNNComponent} from './rating/rating-nn/rating-nn.component';
import {MainComponent} from './main/main.component';
import {RatingGlobalComponent} from './rating/rating-global/rating-global.component';
import {SprintComponent} from './judge/sprint/sprint.component';
import {RatingPilotovComponent} from './rating/rating-pilotov/rating-pilotov.component';
import {LoginComponent} from './password/login/login.component';

const appRoutes = [
  {path: '', component: MainComponent},
  {path: 'sprint', component: SprintComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password', component: RegComponent},
  {path: 'mainmenu', component: EtapmenuComponent},
  {path: 'org', component: OrganizermenuComponent},
  {path: 'org1', component: RegistrationComponent},
  {path: 'org2', component: ResultComponent},
  {path: 'org3', component: FinesComponent},
  {path: 'su1/:game', component: Judge1Component},
  {path: 'su2/:game/:user/:su', component: Judge2Component},
  {path: 'ratingNN', component: RatingNNComponent},
  {path: 'ratingGlobal', component: RatingGlobalComponent},
  {path: 'ratingPilotov/:memberID/:rating', component: RatingPilotovComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
