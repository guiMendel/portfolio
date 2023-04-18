import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-tooltip-help',
  templateUrl: './tooltip-help.component.html',
  styleUrls: ['./tooltip-help.component.scss'],
})
export class TooltipHelpComponent implements OnInit, OnDestroy {
  // Which element with a help property is currently showing
  activeHelpElement: HTMLElement | null = null

  // Text of current tooltip
  tooltipText = ''

  // Timeout token to show tooltip
  tooltipShowToken: ReturnType<typeof setTimeout> | null = null

  // Whether to show the tooltip
  showTooltip = false

  // Style property of tooltip
  tooltipStyle: {
    top: string
    left?: string
    right?: string
    maxWidth: string
  } = { top: '0', maxWidth: '4rem' }

  removeActiveHelp = () => {
    // Stop previous timeout if it exists
    if (this.tooltipShowToken != null) {
      clearTimeout(this.tooltipShowToken)
      this.tooltipShowToken = null
    }
    this.activeHelpElement = null
    this.showTooltip = false
  }

  updateActiveHelp = () => {
    // Get new hovered elements
    const newElements = Array.from(
      document.querySelectorAll(':hover')
    ) as HTMLElement[]
    let newElement: HTMLElement | null = null

    // Get first element with help property
    for (const element of newElements)
      if (element.dataset['help']) {
        newElement = element
        break
      }

    // Do nothing if new element is not null and hasn't changed
    if (newElement?.isEqualNode(this.activeHelpElement)) return

    // Stop previous timeout if it exists
    if (this.tooltipShowToken != null) {
      clearTimeout(this.tooltipShowToken)
      this.tooltipShowToken = null
    }

    // Assign new element
    this.activeHelpElement = newElement

    // If no new element or new element has no help property, stop
    if (newElement == null || newElement.dataset['help'] == undefined) {
      this.showTooltip = false
      return
    }

    // Assign text
    this.tooltipText = newElement.dataset['help']

    // Start timeout to show tooltip
    this.tooltipShowToken = setTimeout(() => {
      if (this.activeHelpElement == null) return

      // Get coordinates
      const { left, right, top, bottom } =
        this.activeHelpElement.getBoundingClientRect()

      // Vertically center it by the element
      this.tooltipStyle.top = `${top + (bottom - top) / 2}px`

      // Figure out whether to place to left or right side
      const rightRelativeToEnd = window.innerWidth - right

      const tooltipGap = '0.6rem'

      // On left
      if (left >= rightRelativeToEnd) {
        delete this.tooltipStyle.left

        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth

        this.tooltipStyle.right = `calc(${
          window.innerWidth - left
        }px - ${scrollbarWidth}px + ${tooltipGap})`
        this.tooltipStyle.maxWidth = `calc(${left}px - 2rem)`
      }

      // On right
      else {
        delete this.tooltipStyle.right
        this.tooltipStyle.left = `calc(${right}px + ${tooltipGap})`
        this.tooltipStyle.maxWidth = `calc(${rightRelativeToEnd}px - 2rem)`
      }

      this.showTooltip = true
    }, 300)
  }

  ngOnInit(): void {
    // Track mouse movement
    window.addEventListener('mousemove', this.updateActiveHelp)
    window.addEventListener('wheel', this.removeActiveHelp)
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.updateActiveHelp)
    window.removeEventListener('wheel', this.removeActiveHelp)
  }
}
