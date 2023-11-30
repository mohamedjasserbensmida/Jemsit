
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Web3Component } from './web3/web3.component';
import { AppRoutingModule } from './app-routing.module';
import { DigitalLabComponent } from './digital-lab/digital-lab.component';
import { AgenceComponent } from './agence/agence.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Home2Component } from './home2/home2.component';
import { AgenceAcquisitionComponent } from './agence-acquisition/agence-acquisition.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Web3Component,
    DigitalLabComponent,
    AgenceComponent,
    BlogComponent,
    PortfolioComponent,
    Home2Component,
    AgenceAcquisitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

