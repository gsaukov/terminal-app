import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CliMainPageComponent } from './cli-main-page/cli-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CliMainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
