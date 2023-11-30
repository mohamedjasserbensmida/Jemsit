

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Web3Component} from "./web3/web3.component";
import {HomeComponent} from "./home/home.component";
import {DigitalLabComponent} from "./digital-lab/digital-lab.component";
import {AgenceComponent} from "./agence/agence.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {Home2Component} from "./home2/home2.component";
import {AgenceAcquisitionComponent} from "./agence-acquisition/agence-acquisition.component";
import { EmailingComponent } from './emailing/emailing.component';
import { SeoComponent } from './seo/seo.component';
import { DataAnaliticComponent } from './data-analitic/data-analitic.component';
import { WebdevComponent } from './webdev/webdev.component';



const routes: Routes = [
  {path:'web3',component:Web3Component},
  {path:'digital',component:DigitalLabComponent},
  {path:'agence',component:AgenceComponent},
  {path:'portfolio',component:PortfolioComponent},
  { path: 'home', component: Home2Component },

  { path: 'agence-acquisition', component: AgenceAcquisitionComponent },
  { path: 'meta', component: HomeComponent },
  { path: 'emailing', component: EmailingComponent },
  { path: 'seo', component: SeoComponent},
  { path: 'web-analytics', component: DataAnaliticComponent},
  { path: 'web-dev', component: WebdevComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }




];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes , { useHash: true , scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

