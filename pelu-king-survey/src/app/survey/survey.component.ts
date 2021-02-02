import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  urlOfficeId: string
  public readonly CARAPACHAY = 'carapachay'
  public readonly MAIPU = 'maipu'
  constructor(private aRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.urlOfficeId = this.aRoute.snapshot.paramMap.get("officeId")

  }

}
