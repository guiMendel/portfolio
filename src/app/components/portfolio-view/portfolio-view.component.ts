import { Component } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss'],
})
export class PortfolioViewComponent {
  featureGallery: { label: string; media?: string }[] = [
    {
      label:
        "Create maps, cars and clients, assign routes for the clients' destinations, customize your experience, and watch it all unfold in real-time",
    },
    {
      label:
        'Fine tune map generation parameters to create realistic-looking maps to simulate with',
    },
    {
      label:
        'Add, remove and edit clients, cars and streets and watch they interact in real-time',
    },
    {
      label:
        "Pick and visualize clients' routes on the go. You decide whether to optimize the route or pick a specific car!",
    },
    {
      label:
        "Customize the app's theme by picking different color and layout schemes",
    },
  ]

  displayedFeature = 0

  setFeature(newIndex: number) {
    const n = this.featureGallery.length

    this.displayedFeature = ((newIndex % n) + n) % n
  }

  iconFor(index: number): IconProp {
    return index == this.displayedFeature
      ? ['fas', 'circle-dot']
      : ['far', 'circle']
  }
}
