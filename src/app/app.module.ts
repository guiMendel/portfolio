import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';
import { ExperienceViewComponent } from './components/experience-view/experience-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioViewComponent,
    ExperienceViewComponent,
    AboutViewComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
