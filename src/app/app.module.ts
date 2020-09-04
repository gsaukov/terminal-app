import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CliMainPageComponent } from './cli-main-page/cli-main-page.component';
import { CvRootPageComponent } from './cli-main-page/cv-root-page/cv-root-page.component';
import { PersonalInformationPageComponent } from './cli-main-page/cv-root-page/personal-information-page/personal-information-page.component';
import { CandidateOverviewPageComponent } from './cli-main-page/cv-root-page/candidate-overview-page/candidate-overview-page.component';
import { EmploymentHistoryPageComponent } from './cli-main-page/cv-root-page/employment-history-page/employment-history-page.component';
import { EducationPageComponent } from './cli-main-page/cv-root-page/education-page/education-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CliMainPageComponent,
    CvRootPageComponent,
    PersonalInformationPageComponent,
    CandidateOverviewPageComponent,
    EmploymentHistoryPageComponent,
    EducationPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
