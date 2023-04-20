import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app/app.component'
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component'
import { ExperienceViewComponent } from './components/experience-view/experience-view.component'
import { AboutViewComponent } from './components/about-view/about-view.component'
import { ContactViewComponent } from './components/contact-view/contact-view.component'
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome'
import {
  faAngular,
  faGithub,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCheck,
  faLocationArrow,
  faX,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { TooltipHelpComponent } from './components/tooltip-help/tooltip-help.component'
import { ToggleComponent } from './components/toggle/toggle.component'

@NgModule({
  declarations: [
    AppComponent,
    PortfolioViewComponent,
    ExperienceViewComponent,
    AboutViewComponent,
    ContactViewComponent,
    TooltipHelpComponent,
    ToggleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faLocationArrow,
      faAngular,
      faReact,
      faVuejs,
      faCheck,
      faXmark
    )
  }
}
