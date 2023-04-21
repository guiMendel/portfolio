import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() value = false
  @Output() valueChange = new EventEmitter<boolean>()

  @Input() storageKey?: string

  setValue(value: boolean) {
    this.value = value
    this.valueChange.emit(this.value)

    if (this.storageKey != undefined)
      localStorage.setItem(this.storageKey, JSON.stringify(this.value))
  }

  toggleValue() {
    this.setValue(!this.value)
  }

  ngOnInit(): void {
    if (
      this.storageKey != undefined &&
      localStorage.getItem(this.storageKey) != null
    )
      this.setValue(JSON.parse(localStorage.getItem(this.storageKey)!))
  }
}
