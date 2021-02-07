import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {
  faces: string[] = ['sad', 'neutral', 'good', 'excelent']
  face: string
  constructor() { }

  ngOnInit(): void {
  }
  serviceStatus(event: string) {
    console.log(event)
  }

  faceSelected(face: string) {
    this.face = face
  }

  atentionStatus(event: string) {
    console.log(event)
  }

  emit() {

  }
}
