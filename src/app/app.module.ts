import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CliMainPageComponent } from './cli-main-page/cli-main-page.component';
import { CvRootComponent } from './cli-main-page/cv-root/cv-root.component';
import { PersonalInformationPageComponent } from './cli-main-page/cv-root/personal-information-page/personal-information-page.component';
import { CandidateOverviewPageComponent } from './cli-main-page/cv-root/candidate-overview-page/candidate-overview-page.component';
import { EmploymentHistoryPageComponent } from './cli-main-page/cv-root/employment-history-page/employment-history-page.component';
import { EducationPageComponent } from './cli-main-page/cv-root/education-page/education-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CliMainPageComponent,
    CvRootComponent,
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
