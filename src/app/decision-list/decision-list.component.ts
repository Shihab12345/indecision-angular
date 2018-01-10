import { Component, OnInit } from '@angular/core';
import { DecisionService } from '../decision.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-decision-list',
  templateUrl: './decision-list.component.html',
  styleUrls: ['./decision-list.component.css']
})
export class DecisionListComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  decisions : string[];

  constructor(private decisionService : DecisionService) { }

  ngOnInit() {
    this.decisions = this.decisionService.getDecisionList();
    this.subscription = this.decisionService.decisionsChanged.subscribe(
      (decisions : string[]) => {
        this.decisions = decisions;
      }
    )
    console.log(this.decisions);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
