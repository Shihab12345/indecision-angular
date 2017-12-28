import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DecisionListComponent } from './decision-list/decision-list.component';
import { DecisionElementComponent } from './decision-element/decision-element.component';
import { DecisionService } from './decision.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CockpitComponent,
    DecisionListComponent,
    DecisionElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DecisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
