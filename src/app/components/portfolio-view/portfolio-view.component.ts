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

  // Next feature to transition to
  nextFeature: number | null = null

  // Whether is ready to start a transition
  transitionReady = true

  galleryClass: { 'transition-right'?: boolean; 'transition-left'?: boolean } =
    {}

  // Returns whether to highlight this feature among gallery options
  highlightedFeature() {
    return this.nextFeature ?? this.displayedFeature
  }

  setFeature(newIndex: number) {
    if (this.nextFeature != null) return

    const n = this.featureGallery.length

    this.nextFeature = ((newIndex % n) + n) % n

    if (this.transitionReady) this.transition()
  }

  iconFor(index: number): IconProp {
    return index == this.highlightedFeature()
      ? ['fas', 'circle-dot']
      : ['far', 'circle']
  }

  transition() {
    if (this.nextFeature == null) return

    this.transitionReady = false

    if (this.nextFeature > this.displayedFeature) {
      this.galleryClass = { 'transition-right': true }
    } else {
      this.galleryClass = { 'transition-left': true }
    }
  }

  finishTransition() {
    // Display the transitioned text
    if (this.nextFeature != null) this.displayedFeature = this.nextFeature

    // Reset the transition variables
    this.nextFeature = null
    this.transitionReady = true

    this.galleryClass = {}

    // Start queued transition
    if (this.nextFeature != null) setTimeout(() => this.transition(), 10)
  }
}
