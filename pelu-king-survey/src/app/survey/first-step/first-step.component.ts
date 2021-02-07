import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Barber {
  name: string
  selected: boolean
}
interface FirstStepModel {
  name: string
}
@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  @Output() barberSelected = new EventEmitter<any>()
  model: FirstStepModel = { name: undefined }
  barberList: Barber[] = [{ name: 'facundo', selected: false }, { name: 'lucas', selected: false }, { name: 'fran', selected: false }]
  constructor() { }

  ngOnInit(): void {
  }

  selectBarber(barber: Barber): void {
    this.barberList.forEach(b => b.selected = false)
    this.barberList.find(b => b.name === barber.name).selected = true
    this.model.name = barber.name
  }
  emit() {
    this.barberSelected.emit({ step: 1, barberSelected: this.model.name })
  }
}
