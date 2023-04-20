import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() value = false
  @Output() valueChange = new EventEmitter<boolean>()

  toggleValue() {
    this.value = !this.value
    this.valueChange.emit(this.value)
  }
}
