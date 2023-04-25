import { Component } from '@angular/core'
import portfolio from 'src/app/data/portfolio'
import { PortfolioEntry } from 'src/app/types/Portfolio.interface'

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss'],
})
export class PortfolioViewComponent {
  portfolio = portfolio

  tracker(_: number, entry: PortfolioEntry) {
    return entry.title
  }
}
