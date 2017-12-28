import { Component, OnInit } from '@angular/core';
import { DecisionService } from '../decision.service';

@Component({
  selector: 'app-decision-list',
  templateUrl: './decision-list.component.html',
  styleUrls: ['./decision-list.component.css']
})
export class DecisionListComponent implements OnInit {

  decisions : string[];

  constructor(private decisionService : DecisionService) { }

  ngOnInit() {
    this.decisions = this.decisionService.getDecisionList();
    this.decisionService.decisionsChanged.subscribe(
      (decisions : string[]) => {
        this.decisions = decisions;
      }
    )
    console.log(this.decisions);
  }

}
