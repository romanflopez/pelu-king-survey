import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textColor'
})
export class TextColorPipe implements PipeTransform {
  faces: string[] = ['sad', 'neutral', 'good', 'excelent']
  transform(faceName: string): string {
    return this.faces.find(f => f == faceName)

  }

}
