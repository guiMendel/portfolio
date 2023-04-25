import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  AccessType,
  PortfolioEntry,
  accessTypeMedia,
  techMap,
} from '../../types/Portfolio.interface'

@Component({
  selector: 'app-portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.scss'],
})
export class PortfolioEntryComponent implements OnInit, OnDestroy {
  @Input() entry?: PortfolioEntry

  // Retrieves a list of objects with icon, help and link for access types
  get entryAccessTypes() {
    return Object.entries(this.entry?.accessLinks ?? {}).map(
      ([accessType, link]) => ({
        ...accessTypeMedia[parseInt(accessType) as AccessType],
        link,
      })
    )
  }

  // Retrieves a list of objects with the name of the tech and an object with it's icon
  get techs() {
    return (
      this.entry?.techStack.map((tech) => ({
        name: tech.toString(),
        icon: techMap[tech],
      })) ?? []
    )
  }

  makeTracker(trackProperty: string) {
    return (_: number, object: { [key: string]: any }) =>
      object[trackProperty] as string
  }

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

  setFeature(newIndex: number, suspendScroll = true) {
    if (this.entry == undefined || this.nextFeature != null) return

    if (suspendScroll) {
      this.scrollActive = false
      if (this.scrollResetToken != undefined)
        clearTimeout(this.scrollResetToken)
      this.scrollResetToken = setTimeout(() => {
        this.scrollActive = true
        this.scrollResetToken = undefined
      }, 10000)
    }

    const n = this.entry.features.length

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

  galleryScrollToken?: ReturnType<typeof setInterval>

  scrollResetToken?: ReturnType<typeof setInterval>

  scrollActive = true

  ngOnInit(): void {
    this.galleryScrollToken = setInterval(() => {
      if (this.scrollActive)
        this.setFeature(this.highlightedFeature() + 1, false)
    }, 5000)
  }

  ngOnDestroy(): void {
    clearInterval(this.galleryScrollToken)
  }
}
