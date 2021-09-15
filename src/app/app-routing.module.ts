import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CliMainPageComponent} from "./cli-main-page/cli-main-page.component";
import {CvRootPageComponent} from "./cli-main-page/cv-root-page/cv-root-page.component";
import {CandidateOverviewPageComponent} from "./cli-main-page/cv-root-page/candidate-overview-page/candidate-overview-page.component";
import {EducationPageComponent} from "./cli-main-page/cv-root-page/education-page/education-page.component";
import {EmploymentHistoryPageComponent} from "./cli-main-page/cv-root-page/employment-history-page/employment-history-page.component";
import {PersonalInformationPageComponent} from "./cli-main-page/cv-root-page/personal-information-page/personal-information-page.component";
import {HelpPageComponent} from "./cli-main-page/help-page/help-page.component";
import {PageNotFoundComponent} from './cli-main-page/page-not-found/page-not-found.component';

const routes: Routes = [

  {path: '', component: CliMainPageComponent, children: [
      {path: 'help', component: HelpPageComponent},
      {path: 'cv', component: CvRootPageComponent, children: [
          {path: '', redirectTo: '/cv/info', pathMatch: 'full'},
          {path: 'info', component: PersonalInformationPageComponent},
          {path: 'overview', component: CandidateOverviewPageComponent},
          {path: 'education', component: EducationPageComponent},
          {path: 'employment', component: EmploymentHistoryPageComponent}
      ]}
    ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
