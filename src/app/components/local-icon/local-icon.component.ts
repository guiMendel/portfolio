import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-local-icon',
  templateUrl: './local-icon.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./local-icon.component.scss'],
})
export class LocalIconComponent implements AfterViewInit {
  @ViewChild('svgContainer') svgContainer?: ElementRef<HTMLSpanElement>

  async ngAfterViewInit() {
    if (this.svgContainer == undefined)
      throw new Error('Failed to get SVG container reference')

    if (this.icon == undefined) throw new Error('Icon prop was not set')

    this.svgContainer.nativeElement.innerHTML = await this.icon
  }

  @Input() icon?: Promise<string>
}
