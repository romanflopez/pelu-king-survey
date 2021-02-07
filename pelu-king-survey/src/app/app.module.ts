import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FirstStepComponent } from './survey/first-step/first-step.component';
import { SecondStepComponent } from './survey/second-step/second-step.component';
import { ThirdStepComponent } from './survey/third-step/third-step.component';
import { TextColorPipe } from './text-color.pipe';
import { SmileyFaceComponent } from './shared/smiley-face/smiley-face.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    TextColorPipe,
    SmileyFaceComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
