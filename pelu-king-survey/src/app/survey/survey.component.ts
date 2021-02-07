import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface FirstStep {
  step: number
  barberSelected: string
}
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  barberList: any = [{ name: 'facundo' }, { name: 'lucas' }, { name: 'fran' }]
  points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  questionModel: any = {}
  step: number = 0
  urlOfficeId: string
  public readonly CARAPACHAY = 'carapachay'
  public readonly MAIPU = 'maipu'

  constructor(private aRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.urlOfficeId = this.aRoute.snapshot.paramMap.get("officeId").toLowerCase()
    this.aRoute.queryParams.subscribe(params => {
      if (params && params.step) {
        this.step = +params.step
      } else {
        this.moveTo(0)
      }
    })
  }



  moveTo(step: number) {
    this.step = step
    this.router.navigate(
      [],
      {
        relativeTo: this.aRoute,
        queryParams: { step: this.step },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
  barberSelected(event: FirstStep) {
    this.step = +event.step
    this.questionModel.barber = event.barberSelected
  }
}
