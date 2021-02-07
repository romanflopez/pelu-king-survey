import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-smiley-face',
  templateUrl: './smiley-face.component.html',
  styleUrls: ['./smiley-face.component.css']
})
export class SmileyFaceComponent {
  @Output() smileySelected = new EventEmitter<any>()
  face: string
  faces: string[] = ['sad', 'neutral', 'good', 'excelent']
  constructor() { }

  faceSelected(smiley: string) {
    this.face = smiley
    this.smileySelected.emit(smiley)
  }
}
